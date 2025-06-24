import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import EstandarModal from './EstandarModal';
import colores from '../../assets/colors/colores';
import EstandarButton from './EstandarButton';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { generosContenidoAudiovisual } from '../data/generosContenidoAudiovisual';
import { tiposContenidoAudiovisual } from '../data/tiposContenidoAudiovisual';

interface Props {
  visible: boolean;
  onClose: () => void;
  onApply: (tipos: string[], generos: string[]) => void;
}

const contentTypes = tiposContenidoAudiovisual.map(
  (t) => t.plural.charAt(0).toUpperCase() + t.plural.slice(1)
);
const genres = generosContenidoAudiovisual
  .map((g) => g.nombre.charAt(0).toUpperCase() + g.nombre.slice(1))
  .sort((a, b) => a.localeCompare(b));

const FiltrarContenido = ({ visible, onClose, onApply }: Props) => {
  const [tiposSeleccionados, setTiposSeleccionados] = useState<string[]>([]);
  const [generosSeleccionados, setGenerosSeleccionados] = useState<string[]>([]);

  const toggleSeleccion = (
    item: string,
    setSeleccion: React.Dispatch<React.SetStateAction<string[]>>,
    seleccionActual: string[]
  ) => {
    if (seleccionActual.includes(item)) {
      setSeleccion(seleccionActual.filter((i) => i !== item));
    } else {
      setSeleccion([...seleccionActual, item]);
    }
  };

  return (
    <EstandarModal visible={visible} onClose={onClose}>
      <View style={styles.modalContainer}>
  
        {/* Header fijo */}
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Filtrar Contenido</Text>
          </View>
          <View>
            <TouchableOpacity onPress={onClose} style={styles.closeIconTouchable}>
              <EvilIcons name="close" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </View>
  
        {/* Content Types fijo */}
        <Text style={styles.sectionTitle}>Tipos de Contenido</Text>
        {contentTypes.map((tipo) => (
          <View key={tipo} style={styles.checkboxRow}>
            <Checkbox
              status={tiposSeleccionados.includes(tipo) ? 'checked' : 'unchecked'}
              onPress={() => toggleSeleccion(tipo, setTiposSeleccionados, tiposSeleccionados)}
              color={colores.purpuraClaro}
              uncheckedColor={colores.purpuraClaro}
            />
            <Text style={styles.checkboxLabel}>{tipo}</Text>
          </View>
        ))}
  
        {/* Scroll solo para Géneros */}
        <Text style={styles.sectionTitle}>Generos</Text>
        <ScrollView
          style={{ maxHeight: 250 }}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <View style={styles.genreGrid}>
            {genres.map((genero) => (
              <View key={genero} style={styles.genreItem}>
                <Checkbox
                  status={generosSeleccionados.includes(genero) ? 'checked' : 'unchecked'}
                  onPress={() => toggleSeleccion(genero, setGenerosSeleccionados, generosSeleccionados)}
                  color={colores.purpuraClaro}
                  uncheckedColor={colores.purpuraClaro}
                />
                <Text style={styles.checkboxLabel}>{genero}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
  
        {/* Botones fijos abajo */}
        <View style={styles.buttonsContainer}>
          <EstandarButton
            titulo="CANCELAR"
            onPress={onClose}
            estiloBoton={[styles.button, styles.cancelButton]}
            estiloTexto={styles.cancelText}
          />
  
          <EstandarButton
            titulo={"APLICAR\nFILTROS"}
            onPress={() => {
              onApply(tiposSeleccionados, generosSeleccionados);
              onClose();
            }}
            estiloBoton={[styles.button, styles.applyButton]}
            estiloTexto={styles.applyText}
          />
        </View>
      </View>
    </EstandarModal>
  );
};

export default FiltrarContenido;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colores.fondo,
    padding: 20,
    width: '90%',
    maxHeight: '100%',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleContainer: {
    flex: 1,
    paddingRight: 10,
  },
  closeIconTouchable: {
    padding: 8,
    marginTop:-15,
  },
  title: {
    fontSize: 20,
    fontFamily: 'PressStart2P',
    color: 'white',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'PressStart2P',
    color: colores.verde,
    marginVertical: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
  },
  checkboxLabel: {
    color: 'white',
    marginLeft: 8,
  },
  genreGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  genreItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: colores.fondo,
    borderWidth: 2,
    borderColor: colores.grisOscuro,
  },
  cancelText: {
    fontSize: 13,
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'PressStart2P',
    marginTop: 6,
  },
  applyButton: {
    backgroundColor: colores.purpura,
    borderWidth: 2,
    borderColor: colores.verde,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyText: {
    fontSize: 11,
    color: 'white',
    fontFamily: 'PressStart2P',
    textAlign: 'center',
  },
});
