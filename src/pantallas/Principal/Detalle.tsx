import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import estilosDetalle from './estilos/estiosDetalle';
import { useRouter } from 'expo-router'; 

type DetalleProps = {
  titulo: string;
  descripcion: string;
  generos: string[] | string;  // me genera conflctos por eso quedo asi
  tipo: string;
};

const Detalle: React.FC<DetalleProps> = ({ titulo, descripcion, generos, tipo }) => {
  const router = useRouter(); 

  // nesecario para mapear
  const generosArray = typeof generos === 'string' ? generos.split(',') : generos;

  return (
    <ScrollView style={estilosDetalle.contenedor}>
      <TouchableOpacity onPress={() => router.back()} style={estilosDetalle.botonVolver}>
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
          {generosArray.length > 0 ? (
            generosArray.map((g, i) => (
              <Text key={i} style={estilosDetalle.genero}>{g.trim()}</Text> //evita los espacios indeaseados
            ))
          ) : (
            <Text style={estilosDetalle.genero}>No genres available</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Detalle;