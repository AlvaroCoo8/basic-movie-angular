import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movies.interface';

@Component({
  selector: 'movies-main-page-component',
  standalone: false,
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
  }
}
