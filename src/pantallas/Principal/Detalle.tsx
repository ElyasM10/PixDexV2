import React from 'react';
import { View, Text, ScrollView, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import estilosDetalle from './estilos/estiosDetalle';
import { contenidosAudiovisuales } from '../../data/contenidosAudiovisuales';
import { obtenerTipo } from '../../utils/contenidoUtils';
import EstandarButton from '../../componentes/EstandarButton';
import Colores from '../../../assets/colors/colores';
import { useRouter } from 'expo-router';
import Etiqueta from '../../componentes/Etiqueta';
import { generosContenidoAudiovisual } from '../../data/generosContenidoAudiovisual';

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

  const tipo = obtenerTipo(contenido.tipoId);

  // Convertir los ids de generos a nombres con mayúscula inicial
  const nombresGeneros = contenido.generos
    .map((idGenero) => {
      const generoObj = generosContenidoAudiovisual.find(g => g.id === idGenero);
      return generoObj ? generoObj.nombre.charAt(0).toUpperCase() + generoObj.nombre.slice(1) : null;
    })
    .filter(Boolean) as string[];

  return (
    <SafeAreaView
      style={[estilosDetalle.contenedor, { backgroundColor: Colores.fondo }]}
      edges={['top', 'left', 'right']}
    >
      <StatusBar barStyle="light-content" backgroundColor={Colores.fondo} />

      <ScrollView style={estilosDetalle.contenedor}>
        <EstandarButton
          titulo="VOLVER"
          icono="arrow-left"
          estiloBoton={estilosDetalle.boton}
          estiloTexto={estilosDetalle.texto}
          estiloIcono={{ marginLeft: 10 }}
          onPress={() => router.back()}
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
        <Etiqueta
          texto={tipo}
          estiloContenedor={[estilosDetalle.etiquetaTipo, { marginBottom: 10 }]}
          estiloTexto={estilosDetalle.textoTipo}
        />
      )}
          <Text style={estilosDetalle.descripcion}>{contenido.descripcion}</Text>

          <Text style={estilosDetalle.subtitulo}>Géneros</Text>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 }}>
            {nombresGeneros.map((nombreGenero) => (
              <Etiqueta key={nombreGenero} texto={nombreGenero} estiloContenedor={{ marginRight: 6, marginBottom: 6 }} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Detalle;