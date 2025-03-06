import { Injectable } from '@angular/core';
import { moviesMock } from '../../data/mocks/mockDataMovies';
import { Movie } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public getMovies(): Movie[] {
    return moviesMock;
  }
}
