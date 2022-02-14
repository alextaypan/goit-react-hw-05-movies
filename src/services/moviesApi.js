import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const KEY = "09b62908e1dc54ff0908b34f49c643ac";

export const fetchTrendingMovies = () => {
  return axios
    .get(`?trending/all/day?api_key=${KEY}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const fetchMovies = (query, page) => {
  return axios
    .get(
      `?${query}/movie?api_key=${KEY}&language=en-US&page=${page}&include_adult=false`
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const fetchMovieById = (movie_id) => {
  return axios
    .get(`?movie/${movie_id}?api_key=${KEY}&language=en-US`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const fetchMovieCredits = (movie_id) => {
  return axios
    .get(`?movie/${movie_id}/credits?api_key=${KEY}&language=en-US`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const fetchMovieReviews = (movie_id) => {
  return axios
    .get(`?movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
