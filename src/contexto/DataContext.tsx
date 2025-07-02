import React, { createContext, useContext, useState, useEffect } from 'react';
import { getContenidos, getGeneros, getTipos } from '../services/servicios';
import { IContenidoAudiovisual } from '../data/contenidosAudiovisuales';
import { IGeneroContenidoAudiovisual } from '../data/generosContenidoAudiovisual';
import { ITipoContenidoAudiovisual } from '../data/tiposContenidoAudiovisual';

interface IDataContext {
  contenidos: IContenidoAudiovisual[];
  generos: IGeneroContenidoAudiovisual[];
  tipos: ITipoContenidoAudiovisual[];
  cargando: boolean;
}

export const DataContext = createContext<IDataContext | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [contenidos, setContenidos] = useState<IContenidoAudiovisual[]>([]);
  const [generos, setGeneros] = useState<IGeneroContenidoAudiovisual[]>([]);
  const [tipos, setTipos] = useState<ITipoContenidoAudiovisual[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [c, g, t] = await Promise.all([
          getContenidos(),
          getGeneros(),
          getTipos(),
        ]);
        setContenidos(c);
        setGeneros(g);
        setTipos(t);
      } catch (e) {
        console.error("Error al obtener datos:", e);
      } finally {
        setCargando(false);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ contenidos, generos, tipos, cargando }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData debe usarse dentro de DataProvider");
  return context;
};
