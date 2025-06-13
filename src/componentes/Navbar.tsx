import React, { useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Colores from '../../assets/colors/colores';
import EstandarButton from './EstandarButton';
import CajaJuego from './CajaJuego';
import FiltrarContenido from './FiltrarContenido';

function Navbar() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={estilos.encabezado}>
        <Text style={estilos.logoTexto}>Pixdex</Text>
        <EstandarButton
        titulo="FILTRAR"
        icono="gear"
        onPress={() => setModalVisible(true)} 
        estiloBoton={estilos.botonFiltrar}
        estiloTexto={estilos.botonFiltrarTexto}
      />
   <FiltrarContenido
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
      onApply={() => {
       
        console.log('Filtrar');
      }}
    />
    </View>

      <View style={estilos.filaCajas}>
      <CajaJuego
        titulo="Desafío del ahorcado"
        descripcion="Adivina los títulos letra por letra, ¿Cuántos puedes identificar?"
        colorFondo={Colores.purpura}
        onPress={() => console.log('Jugar ahorcado')}
      />
         <CajaJuego
        titulo="Pixel Reveal"
        descripcion="Identifica títulos desde imágenes pixeleadas, ¡Pon a prueba tu memoria visual!"
        colorFondo="#5FD068"
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
  },
});

export default Navbar;