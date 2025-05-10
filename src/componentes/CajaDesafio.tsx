import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colores from '../../assets/colors/colores';

function CajaDesafio() {
  return (
    <View style={estilos.caja}>
      <Text style={estilos.titulo}>Desafío del ahorcado</Text>
      <Text style={estilos.descripcion}>
        Adivina los títulos letra por letra, ¿Cuántos puedes identificar?
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
    backgroundColor: Colores.purpura,
    borderWidth: 4,
    borderColor: Colores.grisOscuro,
    justifyContent: 'space-between',
  },
  titulo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'PressStart2P',
    textAlign: 'center',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 14, //Lo cambie a 14 para que se vea mas grande
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

export default CajaDesafio;
