import React from 'react';
import { View, StyleSheet } from 'react-native';
import Etiqueta from './Etiqueta';
import { useData } from '../contexto/DataContext';

interface Props {
  generosIds: number[];
  estiloContenedor?: object;
}

const ListaGeneros: React.FC<Props> = ({ generosIds, estiloContenedor }) => {
  const { generos } = useData();

  const nombresGeneros = generosIds
    .map((id) => {
      const genero = generos.find(g => g.id === id);
      return genero ? genero.nombre.charAt(0).toUpperCase() + genero.nombre.slice(1) : null;
    })
    .filter(Boolean) as string[];

  return (
    <View style={[styles.contenedor, estiloContenedor]}>
      {nombresGeneros.map((genero, index) => (
        <Etiqueta
          key={index}
          texto={genero}
          estiloContenedor={{ marginRight: 6, marginBottom: 6 }}
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
    marginTop: 5,
  },
});

export default ListaGeneros;
