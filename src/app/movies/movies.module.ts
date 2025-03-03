import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';



@NgModule({
  declarations: [MainPageComponent, MoviesListComponent],
  imports: [
    CommonModule
  ], 
  exports: [MainPageComponent]
})
export class MoviesModule { }
