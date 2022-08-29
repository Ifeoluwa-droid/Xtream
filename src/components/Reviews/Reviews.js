import React from 'react'
import { useParams } from 'react-router-dom'
import { Stack } from '@mui/material'
import { useEffect } from 'react'
import { original } from '../../config/config'
import { useState } from 'react'
import Review from './Review'
import {Typography} from '@mui/material'

const Reviews = () => {

  const {showId, showType} = useParams()

  const [reviews, setReviews] = useState([])


  const reviewsEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}/reviews?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  
  const fetchReviews = async () => {
    console.log(reviewsEndpoint)
    const rawReviews = await fetch(reviewsEndpoint)
    const reviewsData = await rawReviews.json()

    const reviews = reviewsData.results.map(review => ({
      author: review['author_details']['username'],
      avatar_path: review['author_details']['avatar_path'] ? original + review['author_details']['avatar_path'] : null, // probably insert something later.
      rating: review['author_details']['rating'],
      content: review['content']
    }))

    setReviews(reviews)
  }

  useEffect(() => {
    fetchReviews()
    console.log(reviews)
  }, [])

  return (
    <Stack
      direction="column"
      spacing="1.5rem"
      sx={{
        padding: '0 2rem',
        marginTop: '2rem'
      }}
    >
      <Typography variant="h3" component="h3" color="white">
        Reviews
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap" sx={{ width: '100%', gap: '1.5rem'}}>
        {reviews.map(review => 
          <Review
            reviewer={review.author}
            avatar={review.avatar_path}
            rating={review.rating}
            content={review.content}
          />
        )}
      </Stack>
    </Stack>
  )
}

export default Reviews