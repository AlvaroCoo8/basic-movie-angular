import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movies.interface';
import { MovieResponse } from '../interfaces/movie-response.interface';

@Component({
  selector: 'movies-main-page-component',
  standalone: false,
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMoviesFromApi().subscribe((res: MovieResponse) => {
      this.movies = res.movies;
    });
  }

  public removeMovieById(idMovie: string): void {
    this.movies = this.moviesService.removeMovieById(idMovie, this.movies);
  }
}
