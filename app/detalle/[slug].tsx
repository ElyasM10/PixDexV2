import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import Detalle from '../../src/pantallas/Principal/Detalle';

export default function DetalleRoute() {
  const { id } = useLocalSearchParams();

  if (!id || Array.isArray(id)) {
    console.log("No se pudo obtener un id válido");
    return null; 
  }

  return <Detalle id={id} />;
}