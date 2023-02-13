import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '19cb12c7db03612dca0520f8299f982f';

export const fetchTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}`
  );
  return response.data;
};

export const fetchSearchMovie = async searchQuery => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${searchQuery}`
  );
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}`
  );
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`
  );
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`
  );
  return response.data;
};
