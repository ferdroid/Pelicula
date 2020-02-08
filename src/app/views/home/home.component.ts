import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesModel } from '../../models/movies.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.store';

import * as homeActions from '../../store/actions/home.action';
import { filter, map, distinct } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    urlImage = 'http://image.tmdb.org/t/p/w780';
    isLoaderPP = true;
    isLoaderPA = true;
    isLoaderPN = true;
    peliculasPopulares: Array<MoviesModel> = [];
    peliculasActuales: Array<MoviesModel> = [];
    peliculasNinos: Array<MoviesModel> = [];

    subPeliPopulares = new Subscription();
    subPeliActuales = new Subscription();
    subPeliNiños = new Subscription();

    constructor(private store: Store<AppState>) { }

    ngOnInit() {
        this.store.dispatch(new homeActions.LoadingPopulares());
        this.subPeliPopulares = this.store.select('home')
            .pipe(
                map(resp => resp.dataPopulares),
                filter(resp => resp !== null),
                distinct()
            )
            .subscribe((resp: any) => {
                this.peliculasPopulares = resp;
                this.isLoaderPP = false;
            });

        this.store.dispatch(new homeActions.LoadingActuales());
        this.subPeliActuales = this.store.select('home')
            .pipe(
                map(resp => resp.dataActuales),
                filter(resp => resp !== null),
                distinct()
            )
            .subscribe((resp: any) => {
                this.peliculasActuales = resp;
                this.isLoaderPA = false;
            });

        this.store.dispatch(new homeActions.LoadingNiños());
        this.subPeliNiños = this.store.select('home')
            .pipe(
                map(resp => resp.dataNiños),
                filter(resp => resp !== null),
                distinct()
            )
            .subscribe((resp: any) => {
                this.peliculasNinos = resp;
                this.isLoaderPN = false;
            });
    }

    ngOnDestroy() {
        this.subPeliPopulares.unsubscribe();
        this.subPeliActuales.unsubscribe();
        this.subPeliNiños.unsubscribe();
        this.store.dispatch(new homeActions.UnsetDataAll());
    }

}
