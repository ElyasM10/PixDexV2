import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, StyleProp } from 'react-native';
import Colores from '../../assets/colors/colores';

interface Props {
  texto: string;
  estiloContenedor?: StyleProp<ViewStyle>;
  estiloTexto?: StyleProp<TextStyle>;
}

const Etiqueta: React.FC<Props> = ({ texto, estiloContenedor, estiloTexto }) => {
  return (
    <View style={[estilos.etiqueta, estiloContenedor]}>
      <Text style={[estilos.texto, estiloTexto]}>{texto}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  etiqueta: {
    backgroundColor: Colores.grisOscuro,
    padding: 5,
    marginRight: 6,
    marginBottom: 6,
  },
  texto: {
    fontSize: 9,
    color: 'white',
  },
});

export default Etiqueta;