import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import Colores from '../../assets/colors/colores';

function BotonFiltrar() {
  return (
    <TouchableOpacity style={estilos.botonFiltrar}>
      <Octicons name="gear" size={15} color="white" style={{ marginRight: 5 }} />
      <Text style={estilos.botonFiltrarTexto}>FILTRAR</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
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
});

export default BotonFiltrar;
