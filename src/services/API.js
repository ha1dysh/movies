const url = 'https://api.themoviedb.org/3/';
const key = 'api_key=6f470809a559b8ad41fb24e27b4387f2';

export function getPopular() {
  return fetch(`${url}movie/popular?${key}`)
    .then((r) => r.json())
    .then((r) => r.results);
}

export function getMovieById(id) {
  return fetch(`${url}movie/${id}?${key}
  `).then((r) => r.json());
}

export function getCast(id) {
  return fetch(`${url}movie/${id}/credits?${key}`)
    .then((r) => r.json())
    .then((r) => r.cast);
}

export function getReview(id) {
  return fetch(`${url}movie/${id}/reviews?${key}`)
    .then((r) => r.json())
    .then((r) => r.results);
}

export function getMovies(query) {
  return fetch(`${url}search/movie?${key}&query=${query}`)
    .then((r) => r.json())
    .then((r) => r.results);
}
