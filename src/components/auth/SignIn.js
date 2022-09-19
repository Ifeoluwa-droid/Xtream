import React from 'react'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import EmailSharpIcon from '@mui/icons-material/EmailSharp'
import { Typography, Box, Stack, Button } from '@mui/material'
import AuthIconWrap from '../ui/AuthIconWrap'
import Input from './Input'
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';


const SignIn = () => {
  return (
    <Stack direction="column" sx={{margin: '0 auto', width: '30%', alignItems: 'center', height: '80%', justifyContent: 'center'}} spacing="1.5rem">
      <Typography variant="h3" component="h3" color="white">SIGN UP</Typography>
      <Stack direction="row" spacing="1rem"> 
        <AuthIconWrap bgColor='blue'>
          <EmailSharpIcon sx={{color: "white"}} />
        </AuthIconWrap>
        <AuthIconWrap>
          <GoogleIcon sx={{color: "white"}} />
        </AuthIconWrap>
        <AuthIconWrap>
          <FacebookIcon  sx={{color: "white"}}/>
        </AuthIconWrap>
      </Stack>
      <Stack direction="row" sx={{width: '100%'}} alignItems='center' spacing=".4rem">
        <div style={{borderBottom: '1px solid grey', flex: 1}}>

        </div>
        <Typography variant='h3' component='h3' color='white'>
          or
        </Typography>
        <div style={{borderBottom: '1px solid grey', flex: 1}}>

        </div>
      </Stack>
      <Stack direction="column" alignItems='flex-start' sx={{width: '100%'}} spacing="1rem">
        <Input
          label="Email"
          type="email"
        />
        <Input 
          label="Password"
          type="password"
        />
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width: '100%'}}>
          <Box sx={{display: 'inline-block'}}>
            <CheckBoxOutlineBlankSharpIcon style={{verticalAlign: 'middle', color: 'white', cursor: 'pointer', marginRight: '1rem'}}/>
            <Typography component="white" variant="white" color="white">
              Remember Me
            </Typography>
          </Box>
          <Typography variant="h3" component="h3" color='white'>
            Forgot Password?
          </Typography>
        </Stack>
        <Button variant="contained" fullWidth disableElevation style={{backgroundColor: '#0F3460', borderRadius: '0.1rem', paddingTop: '.5rem', paddingBottom: '.5rem'}}>
          SIGN IN
        </Button>
        </Stack>
      </Stack>
  )
}

export default SignIn