import { Movie } from './movies.interface';

export interface MovieResponse {
  status: boolean;
  message: string;
  timestamp: number;
  movies: Movie[];
}
