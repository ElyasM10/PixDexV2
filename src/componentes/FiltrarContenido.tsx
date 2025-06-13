import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import EstandarModal from './EstandarModal';
import colores from '../../assets/colors/colores';
import EstandarButton from './EstandarButton';
import EvilIcons from '@expo/vector-icons/EvilIcons';

interface Props {
  visible: boolean;
  onClose: () => void;
  onApply: (tipos: string[], generos: string[]) => void;
}

const contentTypes = ['TV Shows', 'Movies', 'Anime'];
const genres = [
  'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary',
  'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi',
  'Thriller', 'Western', 'Shounen', 'Shoujo', 'Seinen', 'Slice of Life',
  'Mecha', 'Isekai',
];

const FiltrarContenido = ({ visible, onClose, onApply }: Props) => {
  const [tiposSeleccionados, setTiposSeleccionados] = useState<string[]>([...contentTypes]);
  const [generosSeleccionados, setGenerosSeleccionados] = useState<string[]>([]);

  const toggleSeleccion = (item: string, setSeleccion: React.Dispatch<React.SetStateAction<string[]>>, seleccionActual: string[]) => {
    if (seleccionActual.includes(item)) {
      setSeleccion(seleccionActual.filter((i) => i !== item));
    } else {
      setSeleccion([...seleccionActual, item]);
    }
  };

  return (
    <EstandarModal visible={visible} onClose={onClose}>
      <View style={styles.modalContainer}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Filter Content</Text>
          <EvilIcons name="close" size={24} color="white" style={styles.closeIcon} />
        </View>
          <Text style={styles.sectionTitle}>Content Types</Text>
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

          <Text style={styles.sectionTitle}>Genres</Text>
          <View style={styles.genreGrid}>
            {genres.map((genero) => (
              <View key={genero} style={styles.checkboxRow}>
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

          <View style={styles.buttonsContainer}>
          <EstandarButton
            titulo="CANCEL"
            onPress={onClose}
            estiloBoton={[styles.button, styles.cancelButton]}
            estiloTexto={styles.cancelText}
          />

          <EstandarButton
            titulo="APPLY FILTERS"
            onPress={() => {
              onApply(tiposSeleccionados, generosSeleccionados);
              onClose();
            }}
            estiloBoton={[styles.button, styles.applyButton]}
            estiloTexto={styles.applyText}
          />
        </View>
        </ScrollView>
      </View>
    </EstandarModal>
  );
};


export default FiltrarContenido;


const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colores.fondo,
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxHeight: '90%',
  },
  title: {
    fontSize: 20,
    fontFamily: 'PressStart2P',
    color: 'white',
    marginBottom: 20,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 0,
  },
  closeIcon: {
    marginLeft: 10,
    marginTop:-30,
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
    marginBottom: 10,
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
    fontSize:13,
    color: 'white',
    justifyContent:'center',
    fontFamily: 'PressStart2P',
  },
  applyButton: {
    backgroundColor: colores.purpuraOscuro,
    borderWidth: 2,
    borderColor: colores.verde,
    justifyContent:'center',
  },
  applyText: {
    fontSize:11,
    color: 'white',
    fontFamily: 'PressStart2P',
  },
});
