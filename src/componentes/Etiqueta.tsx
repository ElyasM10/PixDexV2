import React from 'react';
import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import Colores from '../../assets/colors/colores';

interface Props {
  texto: string;
  estiloContenedor?: ViewStyle;
}

const Etiqueta: React.FC<Props> = ({ texto, estiloContenedor }) => {
  return (
    <View style={[estilos.etiqueta, estiloContenedor]}>
      <Text style={[estilos.texto, ]}>{texto}</Text>
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