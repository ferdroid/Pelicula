import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PeliculaService {

    constructor(private http: HttpClient) { }

    getPeliculasPopulares() {
        const url = `${environment.urlMoviedb}/discover/movie`;

        const params = new HttpParams()
            .set('sort_by', 'popularity.desc')
            .set('api_key', environment.apikey)
            .set('language', 'es');

        return this.http.get(url, { params })
            .pipe(map((resp: any) => resp.results));
    }

    getPeliculasActuales() {
        const url = `${environment.urlMoviedb}/discover/movie`;

        const params = new HttpParams()
            .set('primary_release_date.gte', '2020-02-01')
            .set('primary_release_date.lte', '2020-02-30')
            .set('api_key', environment.apikey)
            .set('language', 'es');

        return this.http.get(url, { params })
            .pipe(map((resp: any) => resp.results));
    }

    getPeliculasNiños() {
        const url = `${environment.urlMoviedb}/discover/movie`;

        const params = new HttpParams()
            .set('certification_country', 'US')
            .set('certification.lte', 'G')
            .set('sort_by', 'popularity.desc')
            .set('api_key', environment.apikey)
            .set('language', 'es');

        return this.http.get(url, { params })
            .pipe(map((resp: any) => resp.results));
    }

    buscarPelicula(texto: string) {
        const url = `${environment.urlMoviedb}/search/movie`;

        const params = new HttpParams()
            .set('query', texto)
            .set('sort_by', 'popularity.desc')
            .set('api_key', environment.apikey)
            .set('language', 'es');

        return this.http.get(url, { params })
            .pipe(map((resp: any) => resp.results));
    }

    getPelicula(id: string) {
        const url = `${environment.urlMoviedb}/movie/${id}`;

        const params = new HttpParams()
            .set('api_key', environment.apikey)
            .set('language', 'es');

        return this.http.get(url, { params });
    }

}
