import { TMDBDOMAIN } from "./domains"

export const getTrendingUrl = (currentPage) => `${TMDBDOMAIN}/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${currentPage}`
export const getAnimationsUrl = (currentPage) => `${TMDBDOMAIN}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${currentPage}&with_genres=16`
export const movieGenresUrl = `${TMDBDOMAIN}/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
export const tvGenresUrl = `${TMDBDOMAIN}/genre/tv/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`