import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import estilosDetalle from './estilos/estiosDetalle';
import { useRouter } from 'expo-router';
import { contenidosAudiovisuales } from '../../data/contenidosAudiovisuales';
import { obtenerNombresGeneros, obtenerTipo } from '../../utils/contenidoUtils';

type DetalleProps = {
  id: string;
};

const Detalle: React.FC<DetalleProps> = ({ id }) => {
  const router = useRouter();
  const contenido = contenidosAudiovisuales.find(c => c.id === Number(id));

  if (!contenido) {
    return (
      <View style={estilosDetalle.contenedor}>
        <Text>No se encontró el contenido.</Text>
      </View>
    );
  }

  const generosArray = obtenerNombresGeneros(contenido.generos);
  const tipo = obtenerTipo(contenido.tipoId);

  return (
    <ScrollView style={estilosDetalle.contenedor}>
      <TouchableOpacity onPress={() => router.back()} style={estilosDetalle.botonVolver}>
        <Text style={estilosDetalle.textoBotonVolver}>← BACK</Text>
      </TouchableOpacity>

      <View style={estilosDetalle.tarjeta}>
        <View style={estilosDetalle.imagenSimulada}>
          <Text style={estilosDetalle.textoImagen}>{contenido.nombre}</Text>
        </View>

        <Text style={estilosDetalle.titulo}>{contenido.nombre}</Text>

        {tipo && (
          <View style={estilosDetalle.etiquetaTipo}>
            <Text style={estilosDetalle.textoTipo}>{tipo}</Text>
          </View>
        )}

        <Text style={estilosDetalle.descripcion}>{contenido.descripcion}</Text>

        <Text style={estilosDetalle.subtitulo}>Géneros</Text>
        <View style={estilosDetalle.generos}>
          {generosArray.length > 0 ? (
            generosArray.map((g, i) => (
              <Text key={i} style={estilosDetalle.genero}>{g}</Text>
            ))
          ) : (
            <Text style={estilosDetalle.genero}>No hay géneros disponibles</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Detalle;