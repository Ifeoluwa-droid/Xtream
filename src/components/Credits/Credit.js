import React from 'react'
import { Typography, Box, Stack } from '@mui/material'

const Credit = ({
  imageSrc,
  department,
  name,
  character,
}) => {

  return (
      <Box style={{width: 'fit-content', borderRadius: '.3rem', backgroundColor: 'teal'}}>
        <img src={imageSrc} alt="creditee" style={{width: '10rem', height: '14rem', objectFit: 'cover'}} />
        <Stack sx={{padding: '.2rem'}}>
          <Typography gutterBottom variant="h3" component="h3" color="white">
            {name}
          </Typography>
          <Typography variant="body2" color="white">
            {character}
          </Typography>
          <Typography variant="" color="white" sx={{fontStyle: 'italic'}}>
            {department}
          </Typography>
        </Stack>
      </Box>
  )
}

export default Credit