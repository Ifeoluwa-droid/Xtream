import React from "react"
import Video from "../video/Video"
import { Box, Stack, Typography } from "@mui/material"
import Credits from "../credits/Credits"
import Reviews from "../reviews/Reviews"
import { useParams } from "react-router-dom"
import MovieDescription from "../moviedescription/MovieDescription"
import Similar from "../similar/Similar"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { original } from "../../config/config"


const MovieDetails = () => {

    const [backdrop, setBackdrop] = useState('')

    const {showType, showId} = useParams()

    // Url endpoints
    const detailsEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    const recommendationsEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    const similarEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    const trailerEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`

    console.log(detailsEndpoint)

    useEffect(() => {
        const fetchShowBackdrop = async () => {
           const rawDetails =  await fetch(detailsEndpoint)
           const details = await rawDetails.json()
           setBackdrop(details.poster_path)
        }

        fetchShowBackdrop()
    }, [showId])
    

    return ( 
        <Box sx={{width: '100%'}}> 
            <Video />
            <Stack direction='column' sx={{background: `url(${original}${backdrop}) no-repeat, rgba(0, 0, 0, 75%)`, backgroundSize: 'contain', backgroundPosition: 'top', backgroundBlendMode: 'darken'}}>
                <MovieDescription/>
                <Credits />
                <Reviews/>
                <Similar/>
            </Stack>
        </Box>
     );
}
 
export default MovieDetails;