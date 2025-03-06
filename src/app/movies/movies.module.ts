import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [MainPageComponent, MoviesListComponent, MovieComponent],
  imports: [
    CommonModule
  ], 
  providers: [provideHttpClient()],
  exports: [MainPageComponent]
})
export class MoviesModule { }
