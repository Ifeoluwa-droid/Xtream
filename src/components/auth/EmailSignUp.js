import InputField from './Input'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../store/emailSignUp'
import { Modal, Typography, Stack, CircularProgress, useMediaQuery } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import React, { useState } from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  p: 4,
  outline: 'none'
};

export default function EmailSignUp() {

  const dispatch = useDispatch()

  const open = useSelector(state => state.emailSignUp.open)

  const mediaMatchesMaxWidth700 = useMediaQuery('max-width: 700px')


  // endpoints
  const emailSignUpEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_APP_API_KEY}`
  

  const usernameValidationRegex = /\w{7,}/
  const emailValidationRegex = /^\w+@\w+\.com$/
  const passwordValidationRegex = /[\w\W\d\D]{8,}/

  const [credentials, setEnteredCredentials] = useState({username: '', email: '', password: ''})
  const [isLoadingSignUp, setIsLoadingSignUp] = useState(false)
  const [usernameValidationError, setUsernameValidationError] = useState(false)
  const [emailValidationError, setEmailValidationError] = useState(false)
  const [passwordValidationError, setPasswordValidationError] = useState(false)



  const handleUsernameInputChanged = (event) => {
    const {value} = event.target

    setEnteredCredentials(prevValue => ({
      ...prevValue,
      username: value
    }))
  }


  const handleEmailInputChanged = (event) => {
    const {value} = event.target

    console.log(value)
    setEnteredCredentials(prevValue => ({
      ...prevValue,
      email: value
    }))
  }

  const handlePasswordInputChanged = (event) => {
    const {value} = event.target

    console.log(value)
    setEnteredCredentials(prevValue => ({
      ...prevValue,
      password: value
    }))
  }

  const handleClose = () => {
    dispatch(closeModal())
  }

  const signUpWithEmail = (event) => {
    event.preventDefault()
    setIsLoadingSignUp(true)

    if (usernameValidationRegex.test(credentials.username) && emailValidationRegex.test(credentials.email) && passwordValidationRegex.test(credentials.password)) {
      setEmailValidationError(false)
      setPasswordValidationError(false)
      // authenticate
      fetch(emailSignUpEndpoint, 
      {
        method: 'POST',
        body: JSON.stringify({
          displayName: credentials.username,
          email: credentials.email,
          password: credentials.password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
          setIsLoadingSignUp(false)
        if (res.ok) {
          console.log(res)
          setEnteredCredentials({username: '', email: '', password: ''})
        } else {
          res.json().then(data =>
          {
            console.log(data)
          })
        }
      })
    } 

    if (!usernameValidationRegex.test(credentials.username)) {
      setUsernameValidationError(true)
      setIsLoadingSignUp(false)
    }

    if (!emailValidationRegex.test(credentials.email)) {
      setEmailValidationError(true)
      setIsLoadingSignUp(false)
    }

    if (!passwordValidationRegex.test(credentials.password)) {
      setPasswordValidationError(true)
      setIsLoadingSignUp(false)
    }

    return
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="email-sign-up-modal-title"
        aria-describedby="email-sign-up-modal-description"
      >
        <Stack sx={{...style, width: '30%', minWidth: '320px'}} spacing="1.5rem">
          <Typography id="email-sign-up-modal-title" variant="h3" component="h3" color="black">
            SIGN UP WITH EMAIL
          </Typography>
          <Stack spacing='1rem'>
            <InputField
              label="Username"
              labelColor='black'
              type="text"
              value={credentials.username}
              inputColor="black"
              onChange={handleUsernameInputChanged}
            />
            {usernameValidationError && <Typography color="red" variant="h4" component="h4">Username must contain at least 7 characters having only either an alphabet or underscore</Typography>}
            <InputField
              label="Email"
              labelColor='black'
              type="email"
              value={credentials.email}
              inputColor="black"
              onChange={handleEmailInputChanged}
            />
            {emailValidationError && <Typography color='red' variant='h4' component='h4'>Invalid Email</Typography>}
            <InputField
              label="Password"
              labelColor='black'
              type="password"
              value={credentials.password}
              inputColor="black"
              onChange={handlePasswordInputChanged}
            />
            {passwordValidationError && <Typography color='red' variant='h4' component='h4'>Password must be at least 8 characters in length</Typography>}
          </Stack>
          <LoadingButton onClick={signUpWithEmail} loading={isLoadingSignUp} disabled={isLoadingSignUp} loadingIndicator={<CircularProgress sx={{color: 'white'}} size="1.5rem" />} variant="contained" fullWidth disableElevation style={{backgroundColor: '#0F3460', borderRadius: '0.1rem', paddingTop: '.5rem', paddingBottom: '.5rem', marginBottom: '1rem'}}>
            SIGN UP
          </LoadingButton>
        </Stack>
      </Modal>
    </div>
  );
}