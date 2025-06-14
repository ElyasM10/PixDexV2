import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EstandarButton } from '../../componentes/EstandarButton';
import colores from '../../../assets/colors/colores';
import { useRouter } from 'expo-router';


interface PantallaJuegoProps {
  nombreJugador: string;
}

export default function PantallaJuego({ nombreJugador }: PantallaJuegoProps) {
  const [vidas, setVidas] = useState(5);
  const [puntaje, setPuntaje] = useState(0);
  const router = useRouter();

  const titulo = 'ONEPIECE'; // título hardcodeado
  const mostrarPalabra = titulo
    .split('')
    .map(() => '_')
    .join(' '); // muestra guiones inicialmente

  return (
    <View style={styles.container}>
      {/* EXIT y corazones */}
      <View style={styles.topBar}>
        <EstandarButton
          titulo="VOLVER"
          icono="arrow-left"
          onPress={() => router.back()}
          estiloBoton={styles.exitButton}
          estiloTexto={styles.exitText}
        />
        <View style={styles.heartsContainer}>
          {Array.from({ length: vidas }).map((_, index) => (
            <Ionicons key={index} name="heart" size={20} color={colores.purpura} />
          ))}
        </View>
        <View style={styles.jugadorInfo}>
          <Text style={styles.jugadorTexto}>Jugador: {nombreJugador}</Text>
          <Text style={styles.jugadorTexto}>Puntaje: {puntaje}</Text>
        </View>
      </View>

<View style={styles.seccion}>
      {/* Botones GUESS */}
      <View style={styles.botonesGuess}>
        <EstandarButton
          titulo="GUESS TITLE"
          onPress={() => console.log('Adivinar título')}
          estiloBoton={styles.botonGuess}
          estiloTexto={styles.textoBotonGuess}
        />
        <EstandarButton
          titulo="GUESS LETTER"
          onPress={() => console.log('Adivinar letra')}
          estiloBoton={styles.botonGuess}
          estiloTexto={styles.textoBotonGuess}
        />
      </View>

      {/* Recuadro gris con el título hardcodeado */}
      <View style={styles.tituloContainer}>
        <Text style={styles.tituloTexto}>{titulo}</Text>
      </View>

      {/* Palabra con guiones */}
      <View style={styles.guionesContainer}>
        <Text style={styles.guionesTexto}>{mostrarPalabra}</Text>
      </View>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1a',
    padding: 10,
  },
  seccion: {
  marginBottom: 24,
  paddingLeft: 16,
  paddingVertical: 16,
  paddingTop: 6,
  marginTop: 30,
  marginHorizontal: 10,
  borderWidth: 4,
  borderColor: colores.grisOscuro,
  width: '101%', 
  height:'90%',
  alignSelf: 'center', 
},
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  exitButton: {
    backgroundColor: colores.purpura,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  exitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  heartsContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  jugadorInfo: {
    alignItems: 'flex-end',
  },
  jugadorTexto: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'monospace',
  },
  botonesGuess: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 30,
  },
  botonGuess: {
    backgroundColor: colores.purpura,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  textoBotonGuess: {
    color: '#fff',
    fontFamily: 'PressStart2P',
    fontSize: 12,
  },
tituloContainer: {
  backgroundColor: colores.gris,
  paddingVertical: 250,        
  paddingHorizontal: 16,      
  marginTop: 30,
  alignItems: 'center',
  marginRight: 13,
},
  tituloTexto: {
    fontSize: 22,
    fontFamily: 'PressStart2P',
  },
  guionesContainer: {
    backgroundColor:colores.grisOscuro,
    paddingVertical: 20,
    marginTop: 30,
    alignItems: 'center',
    marginRight:13,

  },
  guionesTexto: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'monospace',
    letterSpacing: 5,
  },
});
