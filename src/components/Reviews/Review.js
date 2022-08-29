import { Stack, Typography, Avatar } from '@mui/material'
import React from 'react'

const Review = props => {
  const {reviewer, avatar, rating, content} = props
  return (
    <Stack direction="row" 
      spacing="1rem" sx={{width: '25rem'}}> 
      <Avatar
        src={avatar}
      />
      <Stack direction="column" spacing=".5rem">
        <Typography variant="h3" component="h3" color="white">
          {reviewer}
        </Typography>
        <Typography variant="h3" component="h3" colr="white">
          <span style={{fontStyle: 'italic'}}>{rating}</span> /10
        </Typography>
        <Typography variant="h3" component="h3" color="white">
          {content.slice(0, 200)} ...
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Review