import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Colores from '../../assets/colors/colores';
import CajaDesafio from './CajaDesafio';
import CajaPixelReveal from './CajaPixelReveal';
import BotonFiltrar from './BotonFiltrar';

function Navbar() {
  return (
    <View>
      <View style={estilos.encabezado}>
        <Text style={estilos.logoTexto}>Pixdex</Text>
        <BotonFiltrar/>
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
  },
  logoTexto: {
    fontFamily: 'PressStart2P',
    fontSize: 24,
    fontWeight: 'bold',
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
});

export default Navbar;