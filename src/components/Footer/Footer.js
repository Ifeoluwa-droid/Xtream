import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import CircleIcon from '@mui/icons-material/Circle';
import { Typography, Stack, Grid, IconButton, useMediaQuery } from '@mui/material';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';

const Footer = () => {

  const movieCategories = ['Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Horror', 'Mystery', 'Romance']

  const mediaMatchesMaxWidth670 = useMediaQuery('(max-width: 670px)')

  return (
    <footer style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Stack direction={mediaMatchesMaxWidth670 ? 'column' : 'row'} justifyContent='space-around' sx={{padding: "3rem", background: '#0F3460', gap: mediaMatchesMaxWidth670 ? '3rem' : '5rem'}} >
        <Stack direction="column" spacing="1rem">
          <p style={{fontFamily: "'Ubuntu', sans-serif", color: "white"}}>MOVIE-FLEX</p>
          <code style={{color: 'white'}}>Follow us</code>
          <Stack direction="row" alignItems="flex-start" spacing='1.5rem'>
            <IconButton>
              <LinkedInIcon sx={{color: "white"}}/>
            </IconButton>
            <IconButton>
              <GitHubIcon sx={{color: "white"}}/>
            </IconButton>
            <IconButton>
              <TwitterIcon sx={{color: "white"}}/>
            </IconButton>
          </Stack>
        </Stack>
        <Stack direction="column" spacing="1rem">
          <Typography variant='h2' component='h2' color="white">Movie Categories +</Typography>
          <Grid container rowSpacing={1} columnSpacing='1rem'>
            {movieCategories.map(category => 
              <Grid item xs={6}>
                <CircleIcon sx={{display: 'inline-block', fontSize: ".5em", color: "white", marginRight: '1rem'}}   />
                <Typography variant='h3' component='h3' color="white" sx={{display: 'inline-block'}}>
                  {category}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Stack>
      </Stack>
      <Stack sx={{background: '#16213E', padding: '1.5rem'}} direction="row" justifyContent="space-between">
        <Typography variant="h3" component="h3" color="white">
          Copyright &copy; 2022 <CircleIcon sx={{verticalAlign: 'middle', fontSize: ".5em", color: "white", margin: '0 .5rem'}}/> All Rights Reserved
        </Typography>
        <Typography color="white">
          Made with <FavoriteBorderSharpIcon sx={{verticalAlign: 'middle', margin: '0 .5rem'}}/> by Ifeoluwa
        </Typography>
      </Stack>
    </footer>
  )
}

export default Footer