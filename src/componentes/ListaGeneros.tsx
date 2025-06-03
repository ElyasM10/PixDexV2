import React from 'react';
import { View, StyleSheet } from 'react-native';
import Etiqueta from './Etiqueta';
import { obtenerNombresGeneros } from '../utils/contenidoUtils';

interface Props {
  generosIds: number[];
}

const ListaGeneros: React.FC<Props> = ({ generosIds }) => {
  const generos = obtenerNombresGeneros(generosIds);

  return (
    <View style={[styles.contenedor]}>
      {generos.map((genero, index) => (
        <Etiqueta
          key={index}
          texto={genero}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});

export default ListaGeneros;
