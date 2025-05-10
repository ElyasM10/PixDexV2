import React from 'react';
import { View, Text,ScrollView, Image } from 'react-native';
import estilosDetalle from './estilos/estiosDetalle';
import { contenidosAudiovisuales } from '../../data/contenidosAudiovisuales';
import { obtenerNombresGeneros, obtenerTipo } from '../../utils/contenidoUtils';
import EstandarButton from '../../componentes/botonGenerico';
import { useRouter } from 'expo-router';

type DetalleProps = {
  id: string;
};

  const router = useRouter();

const Detalle: React.FC<DetalleProps> = ({ id }) => {
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
      <EstandarButton
        titulo="← VOLVER"
        onPress={() => router.back()}
        estiloBoton={estilosDetalle.boton}
        estiloTexto={estilosDetalle.texto}
      />
      <View style={estilosDetalle.tarjeta}>
        <View style={estilosDetalle.contenedorImagen}>
          <Image
            source={{ uri: contenido.imageUrl }}
            style={estilosDetalle.imagen}
          />
          <View style={estilosDetalle.overlay}>
            <Text style={estilosDetalle.textoImagen}>{contenido.nombre}</Text>
          </View>
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