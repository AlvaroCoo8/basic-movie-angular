import { Injectable } from '@angular/core';
import { moviesMock } from '../../data/mocks/mockDataMovies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse } from '../interfaces/movie-response.interface';
import { Movie } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private url: string = 'http://localhost:3000/response';

  constructor(private http: HttpClient) {}

  public getMovies(): Movie[] {
    return moviesMock;
  }

  public getMoviesFromApi(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.url);
  }

  public removeMovieById(idMovie: string, movies: Movie[]): Movie[] {
    return movies.filter((movie: Movie) => movie.id !== idMovie);
  }
}
