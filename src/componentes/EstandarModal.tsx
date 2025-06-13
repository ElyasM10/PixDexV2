import React from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface EstandarModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  dismissOnTouchOutside?: boolean;
}

const EstandarModal: React.FC<EstandarModalProps> = ({
  visible,
  onClose,
  children,
  containerStyle,
  dismissOnTouchOutside = true,
}) => {
  const content = (
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }, containerStyle]}>
      {children}
    </View>
  );

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      {dismissOnTouchOutside ? (
        <TouchableWithoutFeedback onPress={onClose}>
          {content}
        </TouchableWithoutFeedback>
      ) : (
        content
      )}
    </Modal>
  );
};

export default EstandarModal;

