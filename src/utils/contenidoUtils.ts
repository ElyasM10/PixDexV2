import { generosContenidoAudiovisual } from '../data/generosContenidoAudiovisual';
import  {tiposContenidoAudiovisual} from '../data/tiposContenidoAudiovisual';

export const obtenerNombresGeneros = (ids: number[]): string[] => {
  return ids.map(
    id => generosContenidoAudiovisual.find(g => g.id === id)?.nombre || 'Desconocido'
  );
};

export const obtenerTipo = (tipoId: number, enPlural: boolean = false): string => {
  const tipo = tiposContenidoAudiovisual.find(t => t.id === tipoId);
  return tipo ? (enPlural ? tipo.plural : tipo.singular) : 'Desconocido';
};
