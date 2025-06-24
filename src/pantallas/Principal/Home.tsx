import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../../componentes/Navbar';
import estilosHome from './estilos/estilosHome';
import { contenidosAudiovisuales, IContenidoAudiovisual } from '../../data/contenidosAudiovisuales';
import Colores from '../../../assets/colors/colores';
import { tiposContenidoAudiovisual } from '../../data/tiposContenidoAudiovisual';
import { generosContenidoAudiovisual } from '../../data/generosContenidoAudiovisual';
import Etiqueta from '../../componentes/Etiqueta';
const Tarjeta = ({ contenido }: { contenido: IContenidoAudiovisual }) => {
  const router = useRouter();

  // Convertir los IDs de géneros a sus nombres:
  const nombresGeneros = contenido.generos
    .map((idGenero) => {
      const generoObj = generosContenidoAudiovisual.find((g) => g.id === idGenero);
      return generoObj ? generoObj.nombre.charAt(0).toUpperCase() + generoObj.nombre.slice(1) : null;
    })
    .filter(Boolean) as string[];

  const handlePress = () => {
    const id = contenido.id.toString();
    router.push({
      pathname: '/detalle/[slug]',
      params: { id },
    });
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

      {/* Mostrar etiquetas para cada género */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 }}>
        {nombresGeneros.map((nombreGenero) => (
          <Etiqueta key={nombreGenero} texto={nombreGenero} estiloContenedor={{ marginBottom: 4 }} />
        ))}
      </View>
    </TouchableOpacity>
  );
};

const Seccion = ({
  tipoId,
  contenidos,
}: {
  tipoId: number;
  contenidos: IContenidoAudiovisual[];
}) => {
  const elementos = contenidos.filter((c) => c.tipoId === tipoId);
  const tipo = tiposContenidoAudiovisual.find((t) => t.id === tipoId);
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
  const [contenidosFiltrados, setContenidosFiltrados] = useState<IContenidoAudiovisual[]>(contenidosAudiovisuales);
  const [mostrarModal, setMostrarModal] = useState(false);

  const aplicarFiltros = (tipos: string[], generos: string[]) => {
    // Obtener los ids de tipos y géneros seleccionados
    const tipoIds = tiposContenidoAudiovisual
      .filter((t) => tipos.includes(t.plural.charAt(0).toUpperCase() + t.plural.slice(1)))
      .map((t) => t.id);

    const generoIds = generosContenidoAudiovisual
      .filter((g) => generos.includes(g.nombre.charAt(0).toUpperCase() + g.nombre.slice(1)))
      .map((g) => g.id);

    // Filtrar los contenidos con AND entre tipos y géneros
    const filtrados = contenidosAudiovisuales.filter((contenido) => {
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

        {tiposContenidoAudiovisual.map((tipo) => (
          <Seccion key={tipo.id} tipoId={tipo.id} contenidos={contenidosFiltrados} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;