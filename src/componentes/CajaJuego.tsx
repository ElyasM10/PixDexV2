import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colores from '../../assets/colors/colores';

interface CajaJuegoProps {
  titulo: string;
  descripcion: string;
  colorFondo: string;
  onPress?: () => void;
  textoBoton?: string;
}

const CajaJuego: React.FC<CajaJuegoProps> = ({
  titulo,
  descripcion,
  colorFondo,
  onPress,
  textoBoton = 'Jugar',
}) => {
  return (
    <View style={[estilos.caja, { backgroundColor: colorFondo }]}>
      <Text style={estilos.titulo}>{titulo}</Text>
      <Text style={estilos.descripcion}>{descripcion}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={estilos.boton}>{textoBoton}</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  caja: {
    padding: 10,
    width: '48%',
    minHeight: 200,
    borderWidth: 4,
    borderColor: Colores.grisOscuro,
    justifyContent: 'space-between',
  },
  titulo: {
    fontFamily: 'PressStart2P',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 14,
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

export default CajaJuego;
