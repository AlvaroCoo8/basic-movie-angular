import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';

@Component({
  selector: 'movies-components-movie',
  standalone: false,

  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {

  @Input()
  public movie!: Movie;

  @Output()
  public movieTittleEventEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  @Output()
  public movieIdEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  public emitMovieTitle(title: string): void {
    this.movieTittleEventEmitter.emit(title);
  }

  public emitMovieId(idMovie: string): void {
    this.movieIdEventEmitter.emit(idMovie);
  }
}
