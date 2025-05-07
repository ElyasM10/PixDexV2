import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Colores from '../../assets/colors/colores';

function BotonVolver() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.back()} style={estilos.boton}>
      <Text style={estilos.texto}>← VOLVER</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
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

export default BotonVolver;
