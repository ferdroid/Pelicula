import * as fromHome from '../actions/home.action';
import { MoviesModel } from '../../models/movies.model';
import { AppState } from '../../app.store';

export interface HomeState {
    loadingPopulares: boolean;
    loadingActuales: boolean;
    loadingNiños: boolean;

    dataPopulares: Array<MoviesModel>;
    dataActuales: Array<MoviesModel>;
    dataNiños: Array<MoviesModel>;
}

const estadoInicial: HomeState = {
    loadingPopulares: false,
    loadingActuales: false,
    loadingNiños: false,
    dataPopulares: null,
    dataActuales: null,
    dataNiños: null
};

export interface HomeAppState extends AppState {
    home: HomeState;
}

export function homeReducer(state = estadoInicial, action: fromHome.acciones): HomeState {

    switch (action.type) {
        case fromHome.LOADING_POPULARES:
            return {
                ...state,
                loadingPopulares: true
            };
        case fromHome.LOADING_ACTUALES:
            return {
                ...state,
                loadingActuales: true
            };
        case fromHome.LOADING_NIÑOS:
            return {
                ...state,
                loadingNiños: true
            };
        case fromHome.SET_DATA_POPULARES:
            return {
                ...state,
                loadingPopulares: false,
                dataPopulares: [
                    ...action.dataPopulares.map(data => ({...data}))
                ]
            };
        case fromHome.SET_DATA_ACTUALES:
            return {
                ...state,
                loadingActuales: false,
                dataActuales: [
                    ...action.dataActuales.map(data => ({...data}))
                ]
            };
        case fromHome.SET_DATA_NIÑOS:
            return {
                ...state,
                loadingNiños: false,
                dataNiños: [
                    ...action.dataNiños.map(data => ({...data}))
                ]
            };
        case fromHome.UNSET_DATA_ALL:
            return {
                ...state,
                dataPopulares: null,
                dataActuales: null,
                dataNiños: null
            };
        default:
            return state;
    }

}
