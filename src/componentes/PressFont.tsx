import { useFonts } from 'expo-font';

export function PressFont() {
  const [loaded, error] = useFonts({
    'PressStart2P': require('../../assets/fonts/PressStart2P.ttf'),
  });

  return { loaded, error };
}
