import { PressFont } from './src/componentes/PressFont';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import AppNavigator from './src/navegacion/Navigator';

export default function App() {
  const { loaded, error } = PressFont();

  if (!loaded && !error) {
    return (
      <View style={styles.contenedorCarga}>
        <ActivityIndicator size="large" color="#7B2CBF" /> 
        <Text style={styles.textoCarga}>Cargando fuentes...</Text>
      </View>
    );
  }

  return (
    <AppNavigator />
  );
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
