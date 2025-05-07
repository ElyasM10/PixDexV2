import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Navbar from '../../componentes/Navbar';
import estilosHome from './estilos/estilosHome';
import { contenidosAudiovisuales } from '../../data/contenidosAudiovisuales';
import { obtenerNombresGeneros, obtenerTipo } from '../../utils/contenidoUtils';
import type { ContenidoAudiovisual } from '../../data/contenidosAudiovisuales'; 

const Tarjeta = ({ contenido }: { contenido: ContenidoAudiovisual }) => {
  const router = useRouter();
  const generos = obtenerNombresGeneros(contenido.generos);
  const tipo = obtenerTipo(contenido.tipoId);

  const handlePress = () => {
    const id = contenido.id.toString();

    router.push({
      pathname: '/detalle/[slug]', 
      params: {
        id,
      },
    });
  };

  return (
    <TouchableOpacity style={estilosHome.tarjeta} onPress={handlePress}>
      <View style={estilosHome.imagenSimulada}>
        <Text style={estilosHome.textoImagen}>{contenido.nombre}</Text>
      </View>
      <Text style={estilosHome.titulo}>{contenido.nombre}</Text>
      <View style={estilosHome.generos}>
        {generos.map((g, i) => (
          <Text key={i} style={estilosHome.genero}>{g}</Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};

const Seccion = ({ tipoId }: { tipoId: number }) => {
  const elementos = contenidosAudiovisuales.filter(c => c.tipoId === tipoId);
  const titulo = obtenerTipo(tipoId, true); 

  return (
    <View style={estilosHome.seccion}>
      <Text style={estilosHome.tituloSeccion}>{titulo.toUpperCase()}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {elementos.map((item) => (
          <Tarjeta key={item.id} contenido={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const Home = () => {
  return (
    <SafeAreaView style={estilosHome.contenedor}>
      <ScrollView>
        <Navbar />
        <Seccion tipoId={1} /> {/* series */}
        <Seccion tipoId={2} /> {/* películas */}
        <Seccion tipoId={3} /> {/* animes */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;