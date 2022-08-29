import React from "react"
import Video from "../Video/Video"
import { Box } from "@mui/material"
import Credits from "../Credits/Credits"
import Reviews from "../Reviews/Reviews"
import { useParams } from "react-router-dom"


const MovieDetails = () => {

    const {showType, showId} = useParams()

    // Url endpoints
    const detailsEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    const recommendationsEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    const similarEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    const trailerEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    

    return ( 
        <Box sx={{width: '100%'}}> 
            <Video />
            <Credits />
            <Reviews/>
        </Box>
     );
}
 
export default MovieDetails;