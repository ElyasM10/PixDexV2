import React from 'react';
import { Snackbar } from 'react-native-paper';
import colores from '../../assets/colors/colores'; 

type Props = {
  visible: boolean;
  setVisible: (value: boolean) => void;
  message: string;
};

const EstandarSnackbar = ({ visible, setVisible, message }: Props) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={() => setVisible(false)}
      duration={Snackbar.DURATION_SHORT}
      style={{
        position: 'absolute',
        bottom: 50,  
        left: 20,
        right: 30,
        zIndex: 100000,
        backgroundColor: colores.purpura,
      }}
    >
      {message}
    </Snackbar>
  );
};

export default EstandarSnackbar;
