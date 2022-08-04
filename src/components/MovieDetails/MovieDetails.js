import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {

    const params = useParams()

    const movieId = params.movieId;

    console.log(movieId)

    // Url endpoints
    const detailsEndpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    const creditsEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    const recommendationsEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    const reviewsEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    const similarEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    const trailerEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    const popularEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    const topRatedEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`


    // Basic Movie properties
    // https://api.themoviedb.org/3/movie/507086?api_key=995a3993391b5fcd99059a439c6fd7b4&language=en-US

    // Movie credits
    // https://api.themoviedb.org/3/movie/453395/credits?api_key=995a3993391b5fcd99059a439c6fd7b4&language=en-US

    return ( 
        <div>
            
        </div>
     );
}
 
export default MovieDetails;