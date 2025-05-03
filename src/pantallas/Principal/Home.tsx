import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navegacion/Navigator';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Navbar from '../Navbar';
import estilosHome from './estilos/estilosHome';


const datos = {
  series: [
    { titulo: 'Stranger Things', generos: ['Drama', 'Fantasy'] },
    { titulo: 'Breaking Bad', generos: ['Crime', 'Drama'] },
    { titulo: 'The Office', generos: ['Comedy'] },
  ],
  peliculas: [
    { titulo: 'Inception', generos: ['Action', 'Adventure'] },
    { titulo: 'The Shawshank Redemption', generos: ['Drama'] },
    { titulo: 'The Dark Knight', generos: ['Action', 'Crime'] },
  ],
  anime: [
    { titulo: 'Attack on Titan', generos: ['Action', 'Fantasy'] },
    { titulo: 'Death Note', generos: ['Mystery', 'Thriller'] },
    { titulo: 'Naruto', generos: ['Adventure', 'Action'] },
  ],
};

const Tarjeta = ({ titulo, generos }: { titulo: string; generos: string[] }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const descripcion = 'Descripción de ejemplo para ' + titulo;
  const tipo = 'TV'; 

  return (
    <TouchableOpacity
      style={estilosHome.tarjeta}
      onPress={() =>
        navigation.navigate('Detalle', {
          titulo,
          generos,
          descripcion,
          tipo,
        })
      }
    >
      <View style={estilosHome.imagenSimulada} />
      <Text style={estilosHome.titulo}>{titulo}</Text>
      <View style={estilosHome.generos}>
        {generos.map((genero, i) => (
          <Text key={i} style={estilosHome.genero}>{genero}</Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};


const Seccion = ({ titulo, elementos }: { titulo: string; elementos: any[] }) => (
  <View style={estilosHome.seccion}>
    <Text style={estilosHome.tituloSeccion}>{titulo.toUpperCase()}</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {elementos.map((item, i) => (
        <Tarjeta key={i} titulo={item.titulo} generos={item.generos} />
      ))}
    </ScrollView>
  </View>
);

const Home = () => {
  return (
    <SafeAreaView style={estilosHome.contenedor}>
      <Navbar />
      <ScrollView>
        <Seccion titulo="Series" elementos={datos.series} />
        <Seccion titulo="Películas" elementos={datos.peliculas} />
        <Seccion titulo="Anime" elementos={datos.anime} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
