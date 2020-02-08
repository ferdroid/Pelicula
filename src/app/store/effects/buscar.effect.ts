import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PeliculaService } from '../../services/pelicula.service';
import { switchMap, map } from 'rxjs/operators';

import * as buscarActions from '../actions/buscar.action';

@Injectable()
export class BuscarEffect { // escuchar acciones que son mandadas al store

    constructor(
        private actions$: Actions,
        private peliculaService: PeliculaService
    ) { }

    @Effect()
    cargarPeliculaPopulares$ = this.actions$.pipe(
        ofType(buscarActions.BUSQUEDA_PELICULA),
        switchMap((action: buscarActions.BuscandoPelicula) => { // cancela y clona otro observable
            return this.peliculaService.buscarPelicula(action.text)
                .pipe(
                    map((data: any) => {
                        return new buscarActions.SetDataPelicula(data);
                    })
                );
        })
    );

}
