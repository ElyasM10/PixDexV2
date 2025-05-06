import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import Detalle from '../../src/pantallas/Principal/Detalle';

type DetalleRouteParams = {
  titulo: string;
  generos: string[];
  descripcion: string;
  tipo: string;
};

export default function DetalleRoute() {
  // Obtener los parámetros de la URL
  const { titulo, generos, descripcion, tipo } = useLocalSearchParams<DetalleRouteParams>();

  // Si no se encuentran los parámetros necesarios, se puede mostrar un error o mensaje de carga
  if (!titulo || !generos || !descripcion || !tipo) {
    console.log("Faltan parametros");
  }

  return (
    <Detalle
      titulo={titulo}
      generos={generos}
      descripcion={descripcion}
      tipo={tipo}
    />
  );
}