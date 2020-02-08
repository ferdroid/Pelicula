import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { MoviesModel } from '../../models/movies.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';

import * as buscarActions from '../../store/actions/buscar.action';
import { map, filter, distinct } from 'rxjs/operators';

@Component({
    selector: 'app-busqueda',
    templateUrl: './busqueda.component.html',
    styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit, OnDestroy {

    urlImage = 'http://image.tmdb.org/t/p/w780';
    peliculas: Array<MoviesModel> = [];
    isLoader = false;

    subBuscarPelicula = new Subscription();

    constructor(private router: Router,
                private store: Store<AppState> ) { }

    ngOnInit() {
        this.subBuscarPelicula = this.store.select('buscar')
            .pipe(
                map(resp => resp.dataPelicula),
                filter(resp => resp !== null),
                distinct()
            )
            .subscribe((resp: any) => {
                this.peliculas = resp;
                this.isLoader = false;
            });
    }

    ngOnDestroy() {
        this.subBuscarPelicula.unsubscribe();
    }

    buscarPelicula($event) {
        const value = $event.srcElement.value;
        if (value.length >= 3 ) {

            this.isLoader = true;
            this.peliculas = [];
            this.store.dispatch(new buscarActions.BuscandoPelicula(value));
        }
    }

    irPelicula(id: number) {
        this.router.navigate(['peliculas', id]);
    }

}
