import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Colores from '../../assets/colors/colores';
import CajaDesafio from './CajaDesafio';
import CajaPixelReveal from './CajaPixelReveal';
import EstandarButton from './botonGenerico';

function Navbar() {
  return (
    <View>
      <View style={estilos.encabezado}>
        <Text style={estilos.logoTexto}>Pixdex</Text>
         <EstandarButton
        titulo="FILTRAR"
        icono="gear"
        onPress={() => console.log('')}
        estiloBoton={estilos.botonFiltrar}
        estiloTexto={estilos.botonFiltrarTexto}
      />
      </View>

      <View style={estilos.filaCajas}>
        <CajaDesafio />
        <CajaPixelReveal/>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:-20,
  },
  logoTexto: {
    fontFamily: 'PressStart2P',
    fontSize: 24,
    color: Colores.purpura,
    marginLeft: 20,
    marginTop: 40,
  },
  filaCajas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
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
    color: 'white',
    fontFamily: 'PressStart2P',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default Navbar;