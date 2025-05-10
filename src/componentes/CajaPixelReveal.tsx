import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colores from '../../assets/colors/colores';

function CajaPixelReveal() {
  return (
    <View style={estilos.caja}>
      <Text style={estilos.titulo}>Pixel Reveal</Text>
      <Text style={estilos.descripcion}>
        Identifica títulos desde imágenes pixeleadas, ¡Pon a prueba tu memoria visual!
      </Text>
      <TouchableOpacity>
        <Text style={estilos.boton}>Jugar</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  caja: {
    padding: 10,
    width: '48%',
    minHeight: 200,
    backgroundColor: '#5FD068',
    borderWidth: 4,
    borderColor: Colores.grisOscuro,
    justifyContent: 'space-between',
  },
  titulo: {
    fontFamily: 'PressStart2P',
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 14,//a 14 para que se vea mejor
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  boton: {
    fontFamily: 'PressStart2P',
    fontSize: 10,
    color: 'white',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
});

export default CajaPixelReveal;
