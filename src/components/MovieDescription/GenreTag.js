import React from 'react'
import { Chip } from '@mui/material'

const GenreTag = ({genre}) => {
  return (
    <Chip label={genre} variant="outlined" sx={{marginRight: '1rem', marginBottom: '1rem', color: "#7FBCD2", border: '1px solid #7FBCD2'}}/>
  )
}

export default GenreTag