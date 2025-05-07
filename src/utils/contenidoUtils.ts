import { generosContenidoAudiovisual } from '../data/generosContenidoAudiovisual';
import  {tiposContenidoAudiovisual} from '../data/tiposContenidoAudiovisual';

/**
 * convierte una lista de ids de generos en una lista de nombres.
 * si un id no se encuentra, se asigna el valor "Desconocido".
 *
 * @param {number[]} ids - lista de ids de generos
 * @returns {string[]} lista de nombres de generos
 */
export const obtenerNombresGeneros = (ids: number[]): string[] => {
  return ids.map(
    id => generosContenidoAudiovisual.find(g => g.id === id)?.nombre || 'Desconocido'
  );
};

/**
 * devuelve el nombre del tipo de contenido según su ID.
 * permite devolver la forma plural si se especifica.
 * si no se encuentra el tipo, retorna "Desconocido".
 *
 * @param {number} tipoId - id del tipo de contenido
 * @param {boolean} [enPlural=false] - si se desea el nombre en plural
 * @returns {string} nombre del tipo de contenido
 */
export const obtenerTipo = (tipoId: number, enPlural: boolean = false): string => {
  const tipo = tiposContenidoAudiovisual.find(t => t.id === tipoId);
  return tipo ? (enPlural ? tipo.plural : tipo.singular) : 'Desconocido';
};
