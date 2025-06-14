import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import EstandarModal from './EstandarModal';
import { EstandarButton } from './EstandarButton';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import colores from '../../assets/colors/colores';

interface NombreJugadorProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (nombre: string) => void;
}

const NombreJugador: React.FC<NombreJugadorProps> = ({
  visible,
  onClose,
  onConfirm,
}) => {
  const [nombre, setNombre] = useState('');

  const confirmar = () => {
    if (nombre.trim()) {
      onConfirm(nombre.trim());
      setNombre('');
    }
  };

  return (
    <EstandarModal visible={visible} onClose={onClose}>
      <View style={styles.modalContent}>
        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Ingresa tu nombre</Text>
          <TouchableOpacity onPress={onClose}>
            <EvilIcons name="close" size={24} color="white" style={styles.closeIcon} />
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Nombre del jugador"
          placeholderTextColor="#bbb"
          value={nombre}
          onChangeText={setNombre}
        />

        <EstandarButton
          titulo="Comenzar juego"
          onPress={confirmar}
          estiloBoton={styles.boton}
          estiloTexto={styles.textoBoton}
        />
      </View>
    </EstandarModal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: colores.fondo,
    padding: 30,
    width: 340,
    alignItems: 'center',
  },
    closeIcon: {
    marginLeft: 10,
    marginTop: -5,
  },
  encabezado: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  titulo: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'PressStart2P',
    flex: 1,
    flexWrap: 'wrap',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: colores.purpura,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: 'white',
    marginBottom: 20,
    fontSize: 14,
  },
boton: {
  backgroundColor: colores.purpura,
  paddingVertical: 10,
  paddingHorizontal: 10, 
  borderWidth: 2,
  borderColor: colores.verde,
  alignSelf: 'flex-end', 
},
  textoBoton: {
    color: 'white',
    fontFamily: 'PressStart2P',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default NombreJugador;
