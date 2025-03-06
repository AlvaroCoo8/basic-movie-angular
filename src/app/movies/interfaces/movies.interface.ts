export interface Movie {
  id: string;
  qid: 'movie' | 'tvSeries';
  title: string;
  year: number;
  stars: string;
  q: 'feature' | 'TV series';
  image: string;
}
