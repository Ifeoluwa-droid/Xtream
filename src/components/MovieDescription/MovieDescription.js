import React, {useState} from 'react'
import {Box, Typography, Stack, Rating, Grid, IconButton, useMediaQuery} from '@mui/material'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import GenreTag from './GenreTag'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';


const MovieDescription = () => {

  const mediaMatchesMaxWidth550 = useMediaQuery('(max-width: 550px')
  const {showType, showId} = useParams()
  const [description, setDescription] = useState({
    name: '',
    duration: '',
    release_date: '',
    rating: 0,
    vote_count: '',
    overview: '',
    genres: [],
    tagline: ''
  })

  const detailsEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`

  useEffect(() => {
    
    console.log(detailsEndpoint)

    const fetchDetails = async () => {
      const rawDetails = await fetch(detailsEndpoint)
      const details = await rawDetails.json()
      setDescription(prevValue => ({
        ...prevValue,
        name: details['original_name'] || details['original_title'],
        duration: showType === 'movie' && details['runtime'],
        release_date: details['first_air_date'] || details['release_date'],
        rating: Number(details['vote_average']),
        vote_count: details['vote_count'],
        overview: details['overview'],
        genres: details['genres'].map(genre => genre.name),
        tagline: details['tagline']
      }))

      console.log(description.rating)
    }

    fetchDetails()
  }, [showId])

  return (
    <Box sx={{padding: '2rem'}}>
      <Typography variant='h1' component='h2' color='white' sx={{marginBottom: '2.5rem', fontWeight: '500', fontSize: mediaMatchesMaxWidth550 && '1.8rem'}}>
        {description.name}
      </Typography> 

      <Typography variant='h3' component='h3' color='white' sx={{marginBottom: '2.5rem', fontWeight: '400', fontStyle: 'italic'}}>
        {description.tagline}
      </Typography> 

      <Stack direction={mediaMatchesMaxWidth550 ? 'column': 'row'} spacing="4rem" sx={{marginBottom: '1.5rem'}}>
      {showType === 'movie' && <Typography variant='h3' component='h3' color='white' sx={{fontFamily: 'Roboto Mono', fontSize: mediaMatchesMaxWidth550 && '.8rem'}}>
        <span style={{color: '#A6D1E6', fontWeight: 'bold'}}>{description.duration}</span> minutes
      </Typography>}
      <Typography variant='h3' component='h3' color='white' sx={{fontSize: mediaMatchesMaxWidth550 && '.8rem'}}>
        Released: <span style={{color: '#A6D1E6'}}>{description.release_date}</span>
      </Typography>
      </Stack>
      <Rating name="read-only" value={description.rating} readOnly precision={0.01} sx={{marginBottom: '1.5rem', color: 'white'}} max={10}/>
      <Typography variant='h3' component='h3' color='white' sx={{marginBottom: '1.5rem', lineSpacing: 2}}>
        {description.overview}
      </Typography>
      <Grid container >
        <Grid item xs={12} md={6}>
          <Stack flexWrap='wrap' direction='row'>
            {description.genres.map(genre => 
              <GenreTag
                genre={genre}
              />
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing=".5rem" alignItems="center">
              <IconButton><AddCircleOutlineIcon sx={{color: "green"}}/></IconButton>
              <Typography variant="h3" component="h3" color="white" sx={{fontSize: mediaMatchesMaxWidth550 && '.8rem'}}>
                Add to WatchList
              </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MovieDescription