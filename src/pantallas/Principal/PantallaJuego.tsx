import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EstandarButton } from '../../componentes/EstandarButton';
import colores from '../../../assets/colors/colores';
import { useRouter } from 'expo-router';
import { contenidosAudiovisuales } from '../../data/contenidosAudiovisuales';

interface PantallaJuegoProps {
  nombreJugador: string;
}

export default function PantallaJuego({ nombreJugador }: PantallaJuegoProps) {
  const [vidas, setVidas] = useState(5);
  const [puntaje, setPuntaje] = useState(0);
  const [indiceContenido, setIndiceContenido] = useState(() =>
    Math.floor(Math.random() * contenidosAudiovisuales.length)
  );
  const [letrasAdivinadas, setLetrasAdivinadas] = useState<string[]>([]);
  const router = useRouter();

  const contenido = contenidosAudiovisuales[indiceContenido];
  console.log('Contenido actual en juego:', contenido.nombre);

  const mostrarPalabra = contenido.nombre
    .toUpperCase()
    .split('')
    .map((char) =>
      char === ' ' ? ' ' : letrasAdivinadas.includes(char) ? char : '_'
    )
    .join(' ');

  const adivinarTitulo = () => {
    Alert.prompt(
      'Adivinar título',
      'Ingresa el título completo:',
      (respuesta) => {
        if (!respuesta) return;
        const respuestaTrim = respuesta.trim().toUpperCase();
        const tituloCorrecto = contenido.nombre.toUpperCase();

        if (respuestaTrim === tituloCorrecto) {
          setPuntaje(puntaje + 1);
          setLetrasAdivinadas([]);
          if (indiceContenido + 1 < contenidosAudiovisuales.length) {
            setIndiceContenido(indiceContenido + 1);
          } else {
            Alert.alert('¡Felicitaciones!', 'Terminaste todos los contenidos.');
            router.replace('/');
          }
        } else {
          setVidas(vidas - 1);
          Alert.alert('Incorrecto', `La respuesta "${respuestaTrim}" es incorrecta.`);
        }
      }
    );
  };

  if (vidas <= 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.finTexto}>¡Juego terminado!</Text>
        <Text style={styles.finTexto}>Tu puntaje: {puntaje}</Text>
        <EstandarButton
          titulo="Volver al inicio"
          onPress={() => router.replace('/')}
          estiloBoton={styles.botonGuess}
          estiloTexto={styles.textoBotonGuess}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* EXIT y corazones */}
      <View style={styles.topBar}>
        <EstandarButton
          titulo="SALIR"
          icono="arrow-left"
          onPress={() => router.replace('/')}
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
            titulo="ADIVINAR TITULO"
            onPress={adivinarTitulo}
            estiloBoton={styles.botonGuess}
            estiloTexto={styles.textoBotonGuess}
          />
          <EstandarButton
            titulo="ADIVINAR LETRA"
            onPress={() => Alert.alert('No implementado aún')}
            estiloBoton={styles.botonGuess}
            estiloTexto={styles.textoBotonGuess}
          />
        </View>

        {/* Imagen del contenido */}
        <Image
          source={{ uri: contenido.imageUrl }}
          style={styles.imagenContenido}
          resizeMode="contain"
        />

        {/* Palabra con guiones o letras adivinadas */}
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
    height: '90%',
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
    alignItems: 'center',
    gap: 10,
    marginTop: 30,
  },
  botonGuess: {
    backgroundColor: colores.purpura,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flex: 1,
    minWidth: 120,
    maxWidth: 160,
    alignItems: 'center',
  },  
  textoBotonGuess: {
    color: '#fff',
    fontFamily: 'PressStart2P',
    fontSize: 10, 
    textAlign: 'center',
  },
  imagenContenido: {
    width: '96%',
    height: 550,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: colores.grisClaro,
    marginLeft:1,
  },
  guionesContainer: {
    backgroundColor: colores.grisOscuro,
    paddingVertical: 20,
    marginTop: 10,
    alignItems: 'center',
    marginRight: 13,
  },
  guionesTexto: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'monospace',
    letterSpacing: 5,
  },
  finTexto: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'PressStart2P',
  },
});