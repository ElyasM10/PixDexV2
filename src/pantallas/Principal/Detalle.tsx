import React from 'react';
import { View, Text, ScrollView, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import estilosDetalle from './estilos/estiosDetalle';
import Colores from '../../../assets/colors/colores';
import EstandarButton from '../../componentes/EstandarButton';
import Etiqueta from '../../componentes/Etiqueta';
import ListaGeneros from '../../componentes/ListaGeneros';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useData } from '../../contexto/DataContext';

const Detalle: React.FC = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams(); 
  const { contenidos, tipos } = useData();
  const contenido = contenidos.find(c => c.id === Number(id));

  if (!contenido) {
    return (
      <View style={estilosDetalle.contenedor}>
        <Text>No se encontró el contenido.</Text>
      </View>
    );
  }

  const tipo = tipos.find(t => t.id === contenido.tipoId)?.singular;

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
          <ListaGeneros generosIds={contenido.generos} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Detalle;