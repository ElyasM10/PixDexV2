import React, { useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Colores from '../../assets/colors/colores';
import EstandarButton from './EstandarButton';
import CajaJuego from './CajaJuego';
import FiltrarContenido from './FiltrarContenido';
import { useRouter } from 'expo-router';
interface NavbarProps {
  onFiltrarPress: () => void;
  modalVisible: boolean;
  onClose: () => void;
  onApply: (tipos: string[], generos: string[]) => void;
}

function Navbar({ onFiltrarPress, modalVisible, onClose, onApply }: NavbarProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push('/hangman-challenge/[hangmanSlug]');
  };

  return (
    <View>
      <View style={estilos.encabezado}>
        <Text style={estilos.logoTexto}>Pixdex</Text>
        <EstandarButton
          titulo="FILTRAR"
          icono="gear"
          onPress={onFiltrarPress}
          estiloBoton={estilos.botonFiltrar}
          estiloTexto={estilos.botonFiltrarTexto}
        />
        <FiltrarContenido
          visible={modalVisible}
          onClose={onClose}
          onApply={onApply}
        />
      </View>

      <View style={estilos.filaCajas}>
        <CajaJuego
          titulo="Desafío del ahorcado"
          descripcion="Adivina los títulos letra por letra, ¿Cuántos puedes identificar?"
          colorFondo={Colores.purpura}
          onPress={handlePress}
        />
        <CajaJuego
          titulo="Pixel Reveal"
          descripcion="Identifica títulos desde imágenes pixeleadas, ¡Pon a prueba tu memoria visual!"
          colorFondo={Colores.verde}
          onPress={() => console.log('Jugar pixel reveal')}
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:-20,
  },
  logoTexto: {
    fontFamily: 'PressStart2P',
    fontSize: 24,
    color: Colores.purpura,
    marginLeft: 20,
    marginTop: 40,
  },
  filaCajas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
    botonFiltrar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colores.purpura,
    padding: 5,
    marginRight: 20,
    marginTop: 40,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: Colores.purpuraClaro,
    borderLeftColor: Colores.purpuraClaro,
    borderRightColor: Colores.purpura,
    borderBottomColor: Colores.purpura,
  },
  botonFiltrarTexto: {
    color: 'white',
    fontFamily: 'PressStart2P',
    fontSize: 10,
    textAlign: 'center',
    marginTop:5,
  },
    boton: {
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontSize: 10,
  },
});

export default Navbar;