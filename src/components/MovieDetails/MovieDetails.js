import React from "react"
import Video from "../video/Video"
import { Box, Stack, Typography } from "@mui/material"
import Credits from "../credits/Credits"
import Reviews from "../reviews/Reviews"
import { useParams } from "react-router-dom"
import MovieDescription from "../moviedescription/MovieDescription"


const MovieDetails = () => {

    const {showType, showId} = useParams()

    // Url endpoints
    const detailsEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    const recommendationsEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    const similarEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    const trailerEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`

    console.log(detailsEndpoint)
    

    return ( 
        <Box sx={{width: '100%'}}> 
            <Video />
            <MovieDescription/>
            <Credits />
            <Reviews/>
        </Box>
     );
}
 
export default MovieDetails;