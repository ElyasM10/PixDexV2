import Colores from '../../../../assets/colors/colores';
import {StyleSheet} from 'react-native';

const estilosDetalle = StyleSheet.create({
    contenedor: {
      flex: 1,
      backgroundColor: Colores.fondo,
      padding: 16,
    },
    tarjeta: {
      borderWidth: 2,
      height:'120%',
      borderColor: Colores.grisOscuro,
      padding: 12,
      marginTop:5,
    },
    imagen: {
      height: 220,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
    },
    textoImagen: {
      color: Colores.grisOscuro,
      fontFamily: 'PressStart2P',
      fontSize: 10,
      textAlign: 'center',
    },
    titulo: {
      fontFamily: 'PressStart2P',
      fontSize: 20,
      color: Colores.purpura,
      marginBottom: 6,
    },
    etiquetaTipo: {
      backgroundColor: Colores.grisOscuro,
      alignSelf: 'flex-start',
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginBottom: 10,
    },
    textoTipo: {
      color: 'white',
      fontSize: 10,
      fontFamily: 'PressStart2P',
    },
    descripcion: {
      color: 'white',
      fontSize: 13,
      marginBottom: 16,
      lineHeight: 18,
    },
    subtitulo: {
      color: Colores.verde,
      fontFamily: 'PressStart2P',
      fontSize: 14,
      marginBottom: 6,
    },
    generos: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    genero: {
      backgroundColor: Colores.grisOscuro,
      color: 'white',
      fontSize: 10,
      paddingHorizontal: 6,
      paddingVertical: 4,
      marginRight: 6,
      marginBottom: 6,
      padding:5,
    },
     boton: {
    marginBottom: 12,
    marginTop: 45,
  },
  texto: {
    backgroundColor: Colores.purpura,
    paddingVertical: 6,
    paddingHorizontal: 14,
    color: 'white',
    fontFamily: 'PressStart2P',
    fontSize: 10,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  });
  export default estilosDetalle;