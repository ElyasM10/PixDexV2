import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colores from '../../../assets/colors/colores';
import { EstandarButton } from '../../componentes/EstandarButton';
import { useRouter } from 'expo-router';
import ModalNombreJugador from '../../componentes/NombreJugador';

export default function HangmanChallenge() {
  const router = useRouter();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nombreJugador, setNombreJugador] = useState('');

  const handlePress = () => {
    const nombre = 'Elias'; // nombre hardcodeado
    setNombreJugador(nombre);

    console.log("Navegando a pantalla-juego con:", nombre);

    router.push({
      pathname: '/pantalla-juego/[nombreJugador]',
      params: { nombreJugador: nombre },
    });
  };

  return (
    <View style={estilos.contenedor}>
      {/* Botón VOLVER */}
      <EstandarButton
        titulo="VOLVER"
        icono="arrow-left"
        estiloBoton={estilos.botonVolver}
        estiloTexto={estilos.textoVolver}
        estiloIcono={{ marginLeft: 10, marginTop: -1 }}
        onPress={() => router.back()}
      />

      {/* Sección título + descripción + botón jugar */}
      <View style={estilos.seccion}>
        <Text style={estilos.titulo}>
          <Text style={estilos.ahorcado}>Desafío del ahorcado</Text>
        </Text>

        <Text style={estilos.descripcion}>
          Adivina los títulos de programas de TV,{'\n'}
          películas y animes letra por letra.{'\n'}
          Tenés 5 vidas. ¿Podés lograr la mejor puntuación?
        </Text>

  {/* Botón COMENZAR JUEGO */}
       <EstandarButton
          titulo="Comenzar Juego"
          onPress={handlePress}
          estiloBoton={estilos.botonComenzar}
          estiloTexto={estilos.textoBotonComenzar}
        />

      {/* Modal para ingresar nombre del jugador */}
          <ModalNombreJugador
        visible={mostrarModal}
        onClose={() => setMostrarModal(false)}
        onConfirm={(nombre) => {
          setNombreJugador(nombre);
          setMostrarModal(false);
          handlePress(); 
        }}
      />

      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
    padding: 20,
    justifyContent: 'flex-start',
  },
seccion: {
  flex:1,
  marginBottom: 24,
  paddingLeft: 16,
  paddingVertical: 16,
  paddingTop: 6,
  marginTop: 30,
  marginHorizontal: 10,
  borderWidth: 4,
  borderColor: colores.grisOscuro,
  width: '101%', 
  alignSelf: 'center', 
},
  titulo: {
    fontSize: 24,
    marginBottom: 16,
  },
  ahorcado: {
    color: colores.purpura,
    fontFamily: 'PressStart2P',
    textAlign: 'center',
    marginLeft: 80,
  },
  descripcion: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 20,
  },
  botonComenzar: {
    backgroundColor: colores.purpura,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: colores.verde,
    alignSelf: 'center',
  },
  textoBotonComenzar: {
    color: '#fff',
    letterSpacing: -1,
    fontFamily: 'PressStart2P',
  },
  botonVolver: {
    backgroundColor: colores.purpura,
    marginTop: 20,
    marginBottom: 12,
    alignSelf: 'flex-start',
    paddingHorizontal: 0,
  },
  textoVolver: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    color: 'white',
    fontFamily: 'PressStart2P',
    fontSize: 10,
    alignSelf: 'flex-start',
    marginLeft: -14,
    marginTop: 4,
  },
});