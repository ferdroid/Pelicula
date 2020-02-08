import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer';

import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PeliculasComponent } from './components/pelicula/pelicula.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BusquedaComponent } from './views/busqueda/busqueda.component';
import { homeReducer } from './store/reducers/home.reducer';
import { effectsArr } from './store/effects/index';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        CarouselComponent,
        PeliculasComponent,
        LoaderComponent,
        BusquedaComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(appReducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        EffectsModule.forRoot( effectsArr )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
