import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import Home from '../src/pantallas/Principal/Home';
import { PressFont } from '../src/componentes/PressFont';
import * as NavigationBar from 'expo-navigation-bar';
import colores from '../assets/colors/colores';

export default function IndexRoute() {
  const { loaded, error } = PressFont();

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(colores.fondo);
    NavigationBar.setButtonStyleAsync('light'); 
  }, []);

  if (!loaded && !error) {
    return (
      <View style={styles.contenedorCarga}>
        <ActivityIndicator size="large" color="#7B2CBF" />
        <Text style={styles.textoCarga}>Cargando fuentes...</Text>
      </View>
    );
  }

  return <Home />;
}
const styles = StyleSheet.create({
  contenedorCarga: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  textoCarga: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
  },
});
