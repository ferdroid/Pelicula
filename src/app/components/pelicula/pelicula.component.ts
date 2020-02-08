import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';
import { MovieModel } from '../../models/movie.model';

@Component({
    selector: 'app-peliculas',
    templateUrl: './pelicula.component.html',
    styleUrls: ['./pelicula.component.scss']
})
export class PeliculasComponent implements OnInit {

    pelicula: MovieModel;
    busqueda = '';

    urlImage = 'http://image.tmdb.org/t/p/w780';
    urlImageOriginal = 'http://image.tmdb.org/t/p/original';

    constructor(
        private route: ActivatedRoute,
        private peliculaService: PeliculaService) { }

    ngOnInit() {

        this.route.params.subscribe(parametros => {
            if (parametros.busqueda) {
                this.busqueda = parametros.busqueda;
            }

            this.peliculaService.getPelicula(parametros.id)
                .subscribe((pelicula: any) => {
                    this.pelicula = pelicula;
                })

        });

    }

}
