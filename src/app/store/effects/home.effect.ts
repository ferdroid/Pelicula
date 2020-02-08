import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import * as homeActions from '../actions/home.action';
import { map, switchMap } from 'rxjs/operators';
import { PeliculaService } from '../../services/pelicula.service';

@Injectable()
export class HomeEffect { // escuchar acciones que son mandadas al store

    constructor(
        private actions$: Actions,
        private peliculaService: PeliculaService
    ) { }

    @Effect()
    cargarPeliculaPopulares$ = this.actions$.pipe(
        ofType(homeActions.LOADING_POPULARES),
        switchMap(() => { // cancela y clona otro observable
            return this.peliculaService.getPeliculasPopulares()
                .pipe(
                    map((data: any) => {
                        return new homeActions.SetDataPopulares(data);
                    })
                );
        })
    );

    @Effect()
    cargarPeliculasActuales$ = this.actions$.pipe(
        ofType(homeActions.LOADING_ACTUALES),
        switchMap(() => {
            return this.peliculaService.getPeliculasActuales()
                .pipe(
                    map((data: any) => {
                        return new homeActions.SetDataActuales(data);
                    })
                );
        })
    );

    @Effect()
    cargarPeliculasNiños$ = this.actions$.pipe(
        ofType(homeActions.LOADING_NIÑOS),
        switchMap(() => {
            return this.peliculaService.getPeliculasNiños()
                .pipe(
                    map((data: any) => {
                        return new homeActions.SetDataNiños(data);
                    })
                );
        })
    );

}
