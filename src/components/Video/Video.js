import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Video = () => {

  const { showId, showType } = useParams()

  const [youtubeUrl, setYoutubeUrl] = useState('')

  const trailerEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`

  console.log(trailerEndpoint)

  useEffect(() => {
      const fetchTrailer = async () => {
        const rawData = await fetch(trailerEndpoint)
        const data = await rawData.json()
        const trailerId = data.results.find(item => item.name === 'Official Trailer') ? data.results.find(item => item.name === 'Official Trailer').key : data.results.find(item => item.type === 'Trailer').key
        setYoutubeUrl(`https://www.youtube.com/embed/${trailerId}`)
      }

      fetchTrailer()
  }, [])

  return <Box sx={{
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    paddingTop: '56.25%'
  }}>
    <iframe style={{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
      border: 'none'
    }} src={youtubeUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </Box>
}

export default Video