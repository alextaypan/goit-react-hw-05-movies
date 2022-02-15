const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "09b62908e1dc54ff0908b34f49c643ac";

async function ApiService(url) {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("404 Not found"));
}

export function fetchTrendingMovies() {
  return ApiService(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);
}

export function fetchMoviesByQuery(query) {
  return ApiService(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
}

export function fetchMovieDetails(movieId) {
  return ApiService(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchMovieCast(movieId) {
  return ApiService(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`);
}

export function fetchMovieReviews(movieId) {
  return ApiService(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`);
}

// axios.defaults.baseURL = "https://api.themoviedb.org/3/";
// const KEY = "09b62908e1dc54ff0908b34f49c643ac";

// export const fetchTrendingMovies = () => {
//   return axios
//     .get(`trending/movie/day?api_key=${KEY}`)
//     .then((response) => response.data)
//     .catch((error) => {
//       throw error;
//     });
// };

// export const fetchMovies = (query, page) => {
//   return axios
//     .get(
//       `${query}/movie?api_key=${KEY}&language=en-US&page=${page}&include_adult=false`
//     )
//     .then((response) => response.data)
//     .catch((error) => {
//       throw error;
//     });
// };

// export const fetchMovieCredits = (movieId) => {
//   return axios
//     .get(`movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
//     .then((response) => console.log(response.data))
//     .catch((error) => {
//       throw error;
//     });
// };

// export const fetchMovieById = (movieId) => {
//   return axios
//     .get(`movie/${movieId}?api_key=${KEY}&language=en-US`)
//     .then((response) => response.data)
//     .catch((error) => {
//       throw error;
//     });
// };

// export const fetchMovieByReviews = (movieId) => {
//   return axios
//     .get(`movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`)
//     .then((response) => response.data)
//     .catch((error) => {
//       throw error;
//     });
// };
