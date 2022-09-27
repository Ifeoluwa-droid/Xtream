import React from 'react'
import { Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSimilar } from '../../store/similar'
import { useSelector } from 'react-redux'
import MovieCard from '../moviecard/MovieCard'
import { original } from '../../config/config'

const Similar = () => {

  const similarShows = useSelector(state => state.similar.similarMovies)

  const dispatch = useDispatch()

  const {showType, showId} = useParams()

  const similarEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
  const recommendationsEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`

  useEffect(() => {

    const fetchSimilar = async () => {
      const rawSimilar = await fetch(recommendationsEndpoint)
      const similar = await rawSimilar.json()
      dispatch(setSimilar({similar, showType}))
    }

    fetchSimilar()

    window.scrollTo(0, 0)
  }, [showId])

  const content = similarShows !== [] ? <Stack direction="column" spacing="1.5rem" sx={{marginTop: '5rem', padding: '0 2rem', marginBottom: '2rem'}}>
  <Typography variant='h3' component='h3' color="white">
    You might also like
  </Typography>
  <Stack direction="row" alignItems="flex-start" justifyContent="flex-start" sx={{width: '100%', overflow: 'scroll', '&::-webkit-scrollbar': {
  display: 'none'
}, gap: '1rem', }}>
    {
      similarShows.map(show => 
        <MovieCard
          mediaType={show['media_type']}
          id={show['id']}
          key={show['id']}
          imgSrc={`${original}${show['poster_path']}`}
          voteAverage={show['vote_average']}
          genres={show['genre_ids']}
          title={show['title']}
          date={show['release_date']}
        />
      )
    }
</Stack>
</Stack> : null

  return content
}

export default Similar