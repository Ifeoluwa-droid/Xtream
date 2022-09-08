import React from 'react'
import Credit from './Credit'
import { Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { original, unavailable } from '../../config/config'

const Credits = () => {

  const { showId, showType } = useParams()
  const [creditInfo, setCreditInfo] = useState([])

  const creditsEndpoint = `https://api.themoviedb.org/3/${showType}/${showId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`

  const fetchCredits = async () => {
    console.log(creditsEndpoint)
    const rawCredits = await fetch(creditsEndpoint)
    const creditsData = await rawCredits.json()
    console.log(creditsData)

    const castInfo = creditsData.cast.map(info => ({
        department: info['known_for_department'],
        character: info['character'],
        name: info['original_name'],
        profile_path: info['profile_path'] ? original + info['profile_path'] : unavailable
    }))

    // const crewInfo = creditsData.crew.map(info => ({
    //   department: info['known_for_department'],
    //   character: info['character'],
    //   name: info['original_name'],
    //   profile_path: info['profile_path'] ? original + info['profile_path'] : unavailable
    // }))

    setCreditInfo(castInfo)
}

  useEffect(() => {
      fetchCredits()
  }, [])

  return (
    <Stack direction="column" spacing="1.5rem" sx={{marginTop: '5rem', padding: '0 2rem'}}>
      <Typography variant='h3' component='h3' color="white">
        Cast
      </Typography>
      <Stack direction="row" alignItems="flex-start" justifyContent="flex-start" sx={{width: '100%', overflow: 'scroll', '&::-webkit-scrollbar': {
      display: 'none'
    }, gap: '1rem', }}>
      {creditInfo.map(info => <Credit
        imageSrc={info['profile_path']}
        department={info['department']}
        character={info['character']}
        name={info['name']}
      />)}
    </Stack>
    </Stack>
  )
}

export default Credits