import axios from 'axios';
const keyApi = 'af69857f8e14e4764e2ee669c4e0f9ab';
const baseUrl = 'https://api.themoviedb.org/3/movie/';
export const baseUrlImg = 'https://image.tmdb.org/t/p/w500';

const loadFilms = movieId => {
  return axios.get(`${baseUrl}${movieId}?api_key=${keyApi}`);
};

const loadingImgPoster = poster_path => {
  return axios.get(`${baseUrlImg}${poster_path}`);
};

const loadingCast = movieId => {
  return axios.get(`${baseUrl}${movieId}/credits?api_key=${keyApi}`);
};

const loadingTrandingFilms = () => {
  return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${keyApi}`);
};

const loadingChangeFilms = query => {
  return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${query}`);
};

const loadingReviews = movieId => {
  return axios.get(`${baseUrl}${movieId}/reviews?api_key=${keyApi}`);
};

export { loadFilms, loadingImgPoster, loadingCast, loadingTrandingFilms, loadingChangeFilms, loadingReviews };
