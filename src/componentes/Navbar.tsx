import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import Colores from '../../assets/colors/colores';


const Navbar: React.FC = () => {
  return (
    <View>
      {/* Encabezado */}
      <View style={estilos.encabezado}>
        <Text style={estilos.logoTexto}>Pixdex</Text>
        <TouchableOpacity style={estilos.botonFiltrar}>
          <Octicons name="gear" size={15} color="white" style={{ marginRight: 5 }} />
          <Text style={estilos.botonFiltrarTexto}>FILTRAR</Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.filaCajas}>
        {/* Caja 1 */}
        <View style={estilos.caja1}>
          <Text style={estilos.textoCaja1}>Desafio del ahorcado</Text>
          <Text style={estilos.textoPequenioCaja1}>Adivina los titulos letra por letra, ¿Cuantos puedes identificar?</Text>
          <TouchableOpacity>
            <Text style={estilos.botonJugar1}>Jugar</Text>
          </TouchableOpacity>
        </View>

        {/* Caja 2 */}
        <View style={estilos.caja2}>
          <Text style={estilos.textoCaja2}>Pixel Reveal</Text>
          <Text style={estilos.textoPequenioCaja2}>Identifica titulos desde imagenes pixeleadas, ¡Pon a prueba tu memoria visual!</Text>
          <TouchableOpacity>
            <Text style={estilos.botonJugar2}>Jugar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoTexto: {
    fontFamily: 'PressStart2P',
    fontSize: 24,
    fontWeight: 'bold',
    color: Colores.purpura,
    marginLeft: 20,
    marginTop: 40,
  },
  botonFiltrar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colores.purpura,
    padding: 5,
    marginRight: 20,
    marginTop: 40,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: Colores.purpuraClaro,
    borderLeftColor: Colores.purpuraClaro,
    borderRightColor: Colores.purpura,
    borderBottomColor: Colores.purpura,
  },
  botonFiltrarTexto: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'PressStart2P',
    fontSize: 10,
    textAlign: 'center',
  },
  
  filaCajas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  caja1: {
    padding: 10,
    width: '48%',
    minHeight: 200,
    backgroundColor: Colores.purpura,
    borderWidth: 4,
    borderColor: Colores.grisOscuro,
    justifyContent: 'space-between',
  },
  textoCaja1: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'PressStart2P',
    textAlign: 'center',
    marginBottom: 10,
  },
  textoPequenioCaja1: {
    fontFamily: 'PressStart2P',
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  botonJugar1: {
    fontFamily: 'PressStart2P',
    fontSize: 10,
    color: 'white',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  caja2: {
    padding: 10,
    width: '48%',
    minHeight: 200,
    backgroundColor: '#5FD068',
    borderWidth: 4,
    borderColor: Colores.grisOscuro,
    justifyContent: 'space-between',
  },
  textoCaja2: {
    fontFamily: 'PressStart2P',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  textoPequenioCaja2: {
    fontFamily: 'PressStart2P',
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  botonJugar2: {
    fontFamily: 'PressStart2P',
    fontSize: 10,
    color: 'white',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
});

export default Navbar;