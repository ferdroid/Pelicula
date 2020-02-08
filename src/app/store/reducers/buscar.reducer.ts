import * as fromBuscar from '../actions/buscar.action';
import { MoviesModel } from '../../models/movies.model';
import { AppState } from '../../app.reducer';

export interface BuscarState {
    loadingBuscarPelicula: boolean;
    textPelicula: string;
    dataPelicula: Array<MoviesModel>;
}

const estadoInicial: BuscarState = {
    loadingBuscarPelicula: false,
    textPelicula: null,
    dataPelicula: null
};

export interface BuscarAppState extends AppState {
    buscar: BuscarState;
}

export function buscarReducer(state = estadoInicial, action: fromBuscar.acciones): BuscarState {

    switch (action.type) {
        case fromBuscar.BUSQUEDA_PELICULA:
            return {
                ...state,
                loadingBuscarPelicula: true,
                textPelicula: action.text
            };
        case fromBuscar.SET_DATA_PELICULA:
            return {
                ...state,
                loadingBuscarPelicula: false,
                dataPelicula: [
                    ...action.dataPelicula.map(data => ({...data}))
                ]
            };
        case fromBuscar.UNSET_DATA_PELICULA:
            return {
                ...state,
                loadingBuscarPelicula: false,
                textPelicula: null,
                dataPelicula: null
            };
        default:
            return state;
    }

}
