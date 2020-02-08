import { Component, OnInit, Input } from '@angular/core';
import { MoviesModel } from '../../models/movies.model';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

    urlImage = 'http://image.tmdb.org/t/p/w780';

    @Input() peliculas: Array<MoviesModel> = [];
    @Input() name: string;

    constructor() { }

    ngOnInit() {
    }

}
