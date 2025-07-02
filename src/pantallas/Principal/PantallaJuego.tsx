import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EstandarButton } from '../../componentes/EstandarButton';
import colores from '../../../assets/colors/colores';
import { useRouter } from 'expo-router';
import NombreTitulo from '../../componentes/NombreTitulo';
import EstandarSnackbar from '../../componentes/EstandarSnackbar';
import { useData } from '../../contexto/DataContext';

interface PantallaJuegoProps {
  nombreJugador: string;
}

export default function PantallaJuego({ nombreJugador }: PantallaJuegoProps) {
  const { contenidos, cargando } = useData(); // uso del contexto
  const [vidas, setVidas] = useState(5);
  const [puntaje, setPuntaje] = useState(0);
  const [indiceContenido, setIndiceContenido] = useState(0);
  const [letrasAdivinadas, setLetrasAdivinadas] = useState<string[]>([]);
  const [mostrarModalTitulo, setMostrarModalTitulo] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [mensajeFinalMostrado, setMensajeFinalMostrado] = useState(false);
  const router = useRouter();

  // Elegimos un indice aleatorio cuando los contenidos esten disponibles
  useEffect(() => {
    if (!cargando && contenidos.length > 0) {
      setIndiceContenido(Math.floor(Math.random() * contenidos.length));
    }
  }, [cargando, contenidos]);

  if (cargando) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>Cargando contenidos...</Text>
      </View>
    );
  }

  const contenido = contenidos[indiceContenido];
  console.log("Contenido en juego: "+contenido.nombre);
  if (!contenido) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>No hay contenidos para mostrar.</Text>
      </View>
    );
  }

  const mostrarPalabra = contenido.nombre
    .toUpperCase()
    .split('')
    .map((char) =>
      char === ' ' ? ' ' : letrasAdivinadas.includes(char) ? char : '_'
    )
    .join(' ');

  const adivinarTitulo = () => {
    setMostrarModalTitulo(true);
  };

  const confirmarTitulo = (respuesta: string) => {
    setMostrarModalTitulo(false);
    const respuestaTrim = respuesta.trim().toUpperCase();
    const tituloCorrecto = contenido.nombre.toUpperCase();

    if (respuestaTrim === tituloCorrecto) {
      setPuntaje((prev) => prev + 1);
      setLetrasAdivinadas([]);
      if (indiceContenido + 1 < contenidos.length) {
        setIndiceContenido(indiceContenido + 1);
        setMessage("¡Adivinaste! Cambiando de título...");
        setVisible(true);
      } else {
        setMessage('¡Felicitaciones! Terminaste todos los títulos.');
        setVisible(true);
        setTimeout(() => router.replace('/'), 3000);
      }
    } else {
      setVidas((prev) => prev - 1);
      setMessage('Respuesta incorrecta.');
      setVisible(true);
    }
  };

  useEffect(() => {
    if (vidas === 0 && !mensajeFinalMostrado) {
      setMessage(`Te has quedado sin vidas. Tu puntaje es: ${puntaje}`);
      setVisible(true);
      setMensajeFinalMostrado(true);

      const timeoutId = setTimeout(() => {
        router.replace('/');
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [vidas]);

  return (
    <View style={styles.container}>
      {/* Barra superior */}
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
        {/* Botones */}
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

        {/* Imagen */}
        <Image
          source={{ uri: contenido.imageUrl }}
          style={styles.imagenContenido}
          resizeMode="contain"
        />

        {/* Palabra adivinada */}
        <View style={styles.guionesContainer}>
          <Text style={styles.guionesTexto}>{mostrarPalabra}</Text>
        </View>
      </View>

      {/* Modal de adivinanza */}
      <NombreTitulo
        visible={mostrarModalTitulo}
        onClose={() => setMostrarModalTitulo(false)}
        onConfirm={confirmarTitulo}
      />

      {/* Snackbar */}
      <EstandarSnackbar
        visible={visible}
        setVisible={setVisible}
        message={message}
      />
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