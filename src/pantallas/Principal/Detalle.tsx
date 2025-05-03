import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import estilosDetalle from './estilos/estiosDetalle';

const Detalle = ({ route, navigation }: any) => {
  const { titulo, descripcion, generos, tipo } = route.params;

  return (
    <ScrollView style={estilosDetalle.contenedor}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={estilosDetalle.botonVolver}>
        <Text style={estilosDetalle.textoBotonVolver}>BACK</Text>
      </TouchableOpacity>

      <View style={estilosDetalle.tarjeta}>
        <View style={estilosDetalle.imagenSimulada}>
          <Text style={estilosDetalle.textoImagen}>{titulo}</Text>
        </View>

        <Text style={estilosDetalle.titulo}>{titulo}</Text>

        {tipo && <View style={estilosDetalle.etiquetaTipo}><Text style={estilosDetalle.textoTipo}>{tipo}</Text></View>}

        <Text style={estilosDetalle.descripcion}>{descripcion}</Text>

        <Text style={estilosDetalle.subtitulo}>Genres</Text>
        <View style={estilosDetalle.generos}>
          {generos.map((g: string, i: number) => (
            <Text key={i} style={estilosDetalle.genero}>{g}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Detalle;