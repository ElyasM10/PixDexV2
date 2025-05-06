import Colores from '../../../../assets/colors/colores';
import {StyleSheet} from 'react-native';

const estilosHome = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: Colores.fondo,
    paddingTop: 10,
  },
  seccion: {
    marginBottom: 24,
    paddingLeft: 16,
    paddingVertical: 16,
    paddingTop: 6,
    marginTop: 30, 
    marginHorizontal: 10,
    borderWidth: 4,
    borderColor: Colores.grisOscuro,
  },
  tituloSeccion: {
    backgroundColor: Colores.purpura,
    color: 'white',
    fontSize: 9,
    fontFamily: 'PressStart2P',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 10,
    borderColor: Colores.purpuraClaro,
    borderWidth: 2,
    marginTop:-18,
  },
  tarjeta: {
    width: 140,
    marginRight: 12,
    padding: 8,
    borderWidth: 2,
    borderColor: Colores.grisOscuro,
  },
  imagenSimulada: {
    width: '111%',           
    height: 180,
    backgroundColor: Colores.grisClaro,
    marginBottom: 6,
    marginLeft: -6,
    marginTop:-6,
    justifyContent: 'center',
  },
  textoImagen: {
    color: Colores.grisOscuro,
    fontFamily: 'PressStart2P',
    fontSize: 4,
    textAlign: 'center',
  },
  titulo: {
    fontFamily: 'PressStart2P',
    fontSize: 9,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  generos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:1,
  },
  genero: {
    fontSize: 10,
    color: 'white',
    marginRight: 4,
    backgroundColor: Colores.grisOscuro,
    paddingHorizontal: 4,
    marginBottom: 2,
  },
});
export default estilosHome;