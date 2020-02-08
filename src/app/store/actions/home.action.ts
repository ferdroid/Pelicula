import { Action } from '@ngrx/store';
import { MoviesModel } from '../../models/movies.model';

export const LOADING_POPULARES = '[Loading] cargando peliculas populares';
export const LOADING_ACTUALES = '[Loading] cargando peliculas actuales';
export const LOADING_NIÑOS = '[Loading] cargando peliculas niños';

export const SET_DATA_POPULARES = '[Data Populares] set data pelicua populares';
export const SET_DATA_ACTUALES = '[Data Actuales] set data pelicua actuales';
export const SET_DATA_NIÑOS = '[Data Niños] set data pelicua niños';

export const UNSET_DATA_ALL = '[Unset All] unset data all';

export class LoadingPopulares implements Action {
    readonly type = LOADING_POPULARES;
}

export class LoadingActuales implements Action {
    readonly type = LOADING_ACTUALES;
}

export class LoadingNiños implements Action {
    readonly type = LOADING_NIÑOS;
}

export class SetDataPopulares implements Action {
    readonly type = SET_DATA_POPULARES;

    constructor(public dataPopulares: Array<MoviesModel>) { }
}

export class SetDataActuales implements Action {
    readonly type = SET_DATA_ACTUALES;

    constructor(public dataActuales: Array<MoviesModel>) { }
}

export class SetDataNiños implements Action {
    readonly type = SET_DATA_NIÑOS;

    constructor(public dataNiños: Array<MoviesModel>) { }
}

export class UnsetDataAll implements Action {
    readonly type = UNSET_DATA_ALL;
}

export type acciones = LoadingPopulares
    | LoadingActuales
    | LoadingNiños
    | SetDataPopulares
    | SetDataActuales
    | SetDataNiños
    | UnsetDataAll;
