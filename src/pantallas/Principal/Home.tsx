import React from 'react';
import { useRouter } from 'expo-router';
import { View,Text, ScrollView, TouchableOpacity, FlatList, Image, StatusBar,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../../componentes/Navbar';
import estilosHome from './estilos/estilosHome';
import { contenidosAudiovisuales, IContenidoAudiovisual} from '../../data/contenidosAudiovisuales';
import { obtenerNombresGeneros } from '../../utils/contenidoUtils';
import Colores from '../../../assets/colors/colores';
import { tiposContenidoAudiovisual } from '../../data/tiposContenidoAudiovisual';
import ListaGeneros from '../../componentes/ListaGeneros';

const Tarjeta = ({ contenido }: { contenido: IContenidoAudiovisual }) => {
  const router = useRouter();
  const generos = obtenerNombresGeneros(contenido.generos);

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
        <Image
          source={{ uri: contenido.imageUrl }}
          style={estilosHome.imagen}
        />
        <View style={estilosHome.overlay}>
          <Text style={estilosHome.textoImagen}>{contenido.nombre}</Text>
        </View>
      </View>

      <Text style={estilosHome.titulo}>{contenido.nombre}</Text>

      <ListaGeneros generosIds={contenido.generos} />
    </TouchableOpacity>
  );
};

const Seccion = ({ tipoId }: { tipoId: number }) => {
  const elementos = contenidosAudiovisuales.filter(c => c.tipoId === tipoId);
  const tipo = tiposContenidoAudiovisual.find(t => t.id === tipoId);
  const titulo = tipo ? tipo.plural.toUpperCase() : '';

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
  return (
    <SafeAreaView style={estilosHome.contenedor} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={Colores.fondo} />
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Navbar />
        {tiposContenidoAudiovisual.map((tipo) => (
          <Seccion key={tipo.id} tipoId={tipo.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;