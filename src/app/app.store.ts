
import { ActionReducerMap } from '@ngrx/store';

import * as fromHomeReducer from './store/reducers/home.reducer';
import * as fromBuscarReducer from './store/reducers/buscar.reducer';

export interface AppState {
    home: fromHomeReducer.HomeState;
    buscar: fromBuscarReducer.BuscarState;
}

export const appReducers: ActionReducerMap<AppState> = {
    home: fromHomeReducer.homeReducer,
    buscar: fromBuscarReducer.buscarReducer
};
