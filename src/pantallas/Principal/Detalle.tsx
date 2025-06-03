import React from 'react';
import { View, Text,ScrollView, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import estilosDetalle from './estilos/estiosDetalle';
import { contenidosAudiovisuales } from '../../data/contenidosAudiovisuales';
import { obtenerNombresGeneros, obtenerTipo } from '../../utils/contenidoUtils';
import EstandarButton from '../../componentes/EstandarButton';
import Colores from '../../../assets/colors/colores';
import { useRouter } from 'expo-router';
import ListaGeneros from '../../componentes/ListaGeneros';
import Etiqueta from '../../componentes/Etiqueta';

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
      estiloIcono={{ marginLeft:10}} 
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
            <View style={estilosDetalle.etiquetaTipo}>
              <Text style={estilosDetalle.textoTipo}>{tipo}</Text>
            </View>
          )}

          <Text style={estilosDetalle.descripcion}>{contenido.descripcion}</Text>

          <Text style={estilosDetalle.subtitulo}>Géneros</Text>
          <ListaGeneros
        generosIds={contenido.generos}
      />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Detalle;