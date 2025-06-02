import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';

type EstandarButtonProps = {
  titulo: string;
  icono?: keyof typeof Octicons.glyphMap;
  onPress?: () => void;
  estiloBoton?: StyleProp<ViewStyle>;
  estiloTexto?: StyleProp<TextStyle>;
  estiloIcono?: StyleProp<ViewStyle>; 
};

export function EstandarButton({
  titulo,
  icono,
  onPress,
  estiloBoton,
  estiloTexto,
  estiloIcono,
}: EstandarButtonProps) {
  return (
    <TouchableOpacity style={[estiloBoton]} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {icono && (
          <Octicons
            name={icono}
            size={15}
            color="white"
            style={[{ marginRight: 5 }, estiloIcono]}
          />
        )}
        <Text style={estiloTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default EstandarButton;
