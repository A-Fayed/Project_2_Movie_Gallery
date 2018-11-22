import axios from 'axios';

const apiKey = 'c3bd0d2f708d96793ef25c442a9e6863';
const apiURL = (url, params) => {
  /*
    create an array out of the passed params object
    and append the api_key param to the array
  */
  const paramsArray = Object.entries({
    ...params,
    api_key: apiKey,
  });

  /*
    convert the params array into a query string
    param[0] is the param name
    param[1] is the param value
  */
  const qString = paramsArray.reduce((str, param) => ([
    ...str,
    `${param[0]}=${param[1]}`,
  ]), []).join('&');

  return `https://api.themoviedb.org/3/${url}${qString ? `?${qString}` : ''}`;
};

const fetch = url => axios.get(url).then(response => response.data);

export default {
  config: () => fetch(apiURL('configuration')),
  discover: params => fetch(apiURL('discover/movie', { sort_by: 'popularity.desc', ...params })),
  search: params => fetch(apiURL('search/movie', params)),
  getGenres: params => fetch(apiURL('genre/movie/list', params)),
  getMoviesFromGenre: (genreId, params) => fetch(apiURL('discover/movie', { with_genres: genreId, ...params })),
  getMovie: (movieId, params) => fetch(apiURL(`movie/${movieId}`, params)),
  getSimilarMovies: (movieId, params) => fetch(apiURL(`movie/${movieId}/similar`, params)),
  getCredits: (movieId, params) => fetch(apiURL(`movie/${movieId}/credits`, params)),
};
