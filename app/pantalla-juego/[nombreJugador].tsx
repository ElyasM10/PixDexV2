import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import PantallaJuego from '../../src/pantallas/Principal/PantallaJuego';

export default function DetalleRoute() {
  const { nombreJugador } = useLocalSearchParams();

  return <PantallaJuego nombreJugador={nombreJugador as string} />;
}