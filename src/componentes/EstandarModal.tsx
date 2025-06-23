import React from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  StyleProp,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
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
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          if (dismissOnTouchOutside) {
            Keyboard.dismiss();
            onClose();
          }
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableWithoutFeedback onPress={() => {}}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              style={{
                width: '90%',
                maxWidth: 400,
              }}
            >
              <View
                style={[
                  {
                    padding: 20,
                  },
                  containerStyle,
                ]}
              >
                {children}
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default EstandarModal;
