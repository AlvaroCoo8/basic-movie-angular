import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  public movieIdEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  showTitleMovieSelected(value: string): void {
    this.titleMovieSelected = value;
  }

  emitMovieId(value: string): void {
    this.movieIdEventEmitter.emit(value);
  }
}
