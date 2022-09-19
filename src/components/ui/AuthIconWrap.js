import React from 'react'
import { Box }from '@mui/material'

const AuthIconWrap = ({children, bgColor}) => {
  return (
    <Box sx={{padding: '.5rem 1.5rem', backgroundColor:  bgColor, cursor: 'pointer'}}>
      {children}
    </Box>
  )
}

export default AuthIconWrap