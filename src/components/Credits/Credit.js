import React from 'react'
import { Typography, Box, Stack, useMediaQuery } from '@mui/material'

const Credit = ({
  imageSrc,
  department,
  name,
  character,
}) => {

  const mediaMatchesMaxWidth1000 = useMediaQuery('(max-width: 1000px)')

  return (
      <Box style={{width: 'fit-content', borderRadius: '.3rem', backgroundColor: '#2B4865', cursor: 'pointer'}}>
        <img src={imageSrc} alt="creditee" style={{width: mediaMatchesMaxWidth1000 ? '8rem' : '10rem', height: mediaMatchesMaxWidth1000 ? '12rem' : '14rem', objectFit: 'cover'}} />
        <Stack sx={{padding: '.2rem'}}>
          <Typography gutterBottom variant="h3" component="h3" color="white" sx={{fontSize: mediaMatchesMaxWidth1000 && '.7rem'}}>
            {name}
          </Typography>
          <Typography variant="body2" color="white" sx={{fontSize: mediaMatchesMaxWidth1000 && '.7rem'}}>
            {character && <div>as <span style={{fontWeight: '600'}}>{character}</span></div>}
          </Typography>
          <Typography variant="" color="white" sx={{fontStyle: 'italic', fontSize: mediaMatchesMaxWidth1000 && '.7rem'}}>
            {department}
          </Typography>
        </Stack>
      </Box>
  )
}

export default Credit