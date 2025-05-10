import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Octicons } from '@expo/vector-icons';

type EstandarButtonProps = {
  titulo: string;
  icono?: keyof typeof Octicons.glyphMap;
  onPress?: () => void;
  estiloBoton?: StyleProp<ViewStyle>;
  estiloTexto?: StyleProp<TextStyle>;
};

export function EstandarButton({ titulo, icono, onPress, estiloBoton, estiloTexto }: EstandarButtonProps) {
  return (
    <TouchableOpacity style={[estiloBoton]} onPress={onPress}>
     {icono && <Octicons name={icono} size={15} color="white" style={{ marginRight: 5 }} />}
      <Text style={estiloTexto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

export default EstandarButton;
