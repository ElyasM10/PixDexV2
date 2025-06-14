import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colores from '../../assets/colors/colores';
import EstandarButton from './EstandarButton';

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
      <EstandarButton
        titulo={textoBoton}
        onPress={onPress}
        estiloBoton={estilos.boton}
        estiloTexto={estilos.textoBoton}
      />
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
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontFamily: 'PressStart2P',
    fontSize: 10,
    marginLeft:90,
  },
});

export default CajaJuego;
