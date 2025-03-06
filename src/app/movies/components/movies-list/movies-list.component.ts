import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';

@Component({
  selector: 'movies-components-movies-list',
  standalone: false,

  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  public titleMovieSelected: string = '';

  @Input()
  public movies: Movie[] = [];

  showTitleMovieSelected(value: string): void {
    this.titleMovieSelected = value;
  }
}
