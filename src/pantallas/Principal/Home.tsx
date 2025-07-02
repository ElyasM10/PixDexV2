import React, { useEffect, useState } from 'react';
import {View, Text,ScrollView , FlatList, Image,StatusBar, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Navbar from '../../componentes/Navbar';
import estilosHome from './estilos/estilosHome';
import Colores from '../../../assets/colors/colores';
import Etiqueta from '../../componentes/Etiqueta';
import { IContenidoAudiovisual } from '../../data/contenidosAudiovisuales';
import { useData } from '../../contexto/DataContext';

const Tarjeta = ({ contenido }: { contenido: IContenidoAudiovisual }) => {
  const router = useRouter();

  const { generos } = useData();
  const nombresGeneros = contenido.generos
    .map((idGenero) => {
      const generoObj = generos.find((g) => g.id === idGenero);
      return generoObj ? generoObj.nombre.charAt(0).toUpperCase() + generoObj.nombre.slice(1) : null;
    })
    .filter(Boolean) as string[];

  const handlePress = () => {
    const id = contenido.id.toString();
    router.push({ pathname: '/detalle/[slug]', params: { id } });
  };

  return (
    <TouchableOpacity style={estilosHome.tarjeta} onPress={handlePress}>
      <View style={estilosHome.contenedorImagen}>
        <Image source={{ uri: contenido.imageUrl }} style={estilosHome.imagen} />
        <View style={estilosHome.overlay}>
          <Text style={estilosHome.textoImagen}>{contenido.nombre}</Text>
        </View>
      </View>
      <Text style={estilosHome.titulo}>{contenido.nombre}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 }}>
        {nombresGeneros.map((nombreGenero) => (
          <Etiqueta key={nombreGenero} texto={nombreGenero} estiloContenedor={{ marginBottom: 4 }} />
        ))}
      </View>
    </TouchableOpacity>
  );
};

const Seccion = ({ tipoId, contenidos }: { tipoId: number; contenidos: IContenidoAudiovisual[] }) => {
  const { tipos } = useData();
  const elementos = contenidos.filter((c) => c.tipoId === tipoId);
  const tipo = tipos.find((t) => t.id === tipoId);
  const titulo = tipo ? tipo.plural.toUpperCase() : '';

  if (elementos.length === 0) {
    return (
      <View style={estilosHome.seccion}>
        <Text style={estilosHome.tituloSeccion}>{titulo}</Text>
        <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'PressStart2P' }}>
          Sin resultados para los filtros elegidos
        </Text>
      </View>
    );
  }

  return (
    <View style={estilosHome.seccion}>
      <Text style={estilosHome.tituloSeccion}>{titulo}</Text>
      <FlatList
        horizontal
        data={elementos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Tarjeta contenido={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const Home = () => {
  const { contenidos, tipos, generos, cargando } = useData();
  const [contenidosFiltrados, setContenidosFiltrados] = useState<IContenidoAudiovisual[]>([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    if (!cargando) {
      setContenidosFiltrados(contenidos);
    }
  }, [contenidos, cargando]);

  const aplicarFiltros = (tiposSeleccionados: string[], generosSeleccionados: string[]) => {
    const tipoIds = tipos
      .filter((t) => tiposSeleccionados.includes(capitalize(t.plural)))
      .map((t) => t.id);

    const generoIds = generos
      .filter((g) => generosSeleccionados.includes(capitalize(g.nombre)))
      .map((g) => g.id);

    const filtrados = contenidos.filter((contenido) => {
      const coincideTipo = tipoIds.length === 0 || tipoIds.includes(contenido.tipoId);
      const coincideGenero = generoIds.length === 0 || contenido.generos.some((g) => generoIds.includes(g));
      return coincideTipo && coincideGenero;
    });

    setContenidosFiltrados(filtrados);
  };

  return (
    <SafeAreaView style={estilosHome.contenedor} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={Colores.fondo} />
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Navbar
          onFiltrarPress={() => setMostrarModal(true)}
          modalVisible={mostrarModal}
          onClose={() => setMostrarModal(false)}
          onApply={(tipos, generos) => {
            aplicarFiltros(tipos, generos);
            setMostrarModal(false);
          }}
        />

        {tipos.map((tipo) => (
          <Seccion key={tipo.id} tipoId={tipo.id} contenidos={contenidosFiltrados} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

function capitalize(texto: string) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export default Home;