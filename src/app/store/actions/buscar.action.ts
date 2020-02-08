import { Action } from '@ngrx/store';
import { MoviesModel } from '../../models/movies.model';

export const BUSQUEDA_PELICULA = '[Loading] buscando pelicula';
export const SET_DATA_PELICULA = '[Set Data Pelicula] set data pelicula';
export const UNSET_DATA_PELICULA = '[Unset Data Pelicula] unset data pelicula';

export class BuscandoPelicula implements Action {
    readonly type = BUSQUEDA_PELICULA;

    constructor(public text: string) { }
}

export class SetDataPelicula implements Action {
    readonly type = SET_DATA_PELICULA;

    constructor(public dataPelicula: Array<MoviesModel>) { }
}

export class UnsetData implements Action {
    readonly type = UNSET_DATA_PELICULA;
}

export type acciones = BuscandoPelicula
    | SetDataPelicula
    | UnsetData;
