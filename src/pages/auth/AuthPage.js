import React from 'react'
import { Box, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

const AuthPage = ({
  children
}) => {
  return (
    <Box sx={{minHeight: '100vh', width: '100%'}} style={{textAlign: 'center'}}>
      <Typography variant="h2" component="h2" color="white" sx={{margin: '2rem auto 0'}}>Xtream</Typography>
      <Outlet/>
    </Box>
  )
}

export default AuthPage