import { useMediaQuery } from '@mui/material'
import React from 'react'

const MovieSummary = () => {

  const mediaMatchesMaxWidth1414 = useMediaQuery('(max-width: 1414px)')

  return <Box sx={{
      padding: '0 3rem',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      '& > div:nth-child(2)': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '30%'
      },
      justifyContent: mediaMatchesMaxWidth900 ? 'flex-end' : 'center',
      paddingBottom: mediaMatchesMaxWidth900 ? mediaMatchesMaxWidth700 ? '2.5rem' : '5rem' : '5rem',
      gap: mediaMatchesMaxWidth700 ? '1rem' : '2rem'
   }}>
     <h2 style={{letterSpacing: mediaMatchesMaxWidth900 ? mediaMatchesMaxWidth700 ? mediaMatchesMaxWidth550 ? '1rem' : '1.5rem' : '2rem' : '3rem'}}>{item['title']}</h2>
     <Box sx={{
       width: mediaMatchesMaxWidth1000 ? '100%' : '30%',
       gap: mediaMatchesMaxWidth1000 ? mediaMatchesMaxWidth700 ? '1rem' : '2rem' : '3rem'
     }}>
       <Box sx={{
        position: 'relative',
        bottom: '5px'
       }}><span style={{fontSize: mediaMatchesMaxWidth1414 ? '1.5rem' : '2rem'}}>{String(item['vote_average']).slice(0,3)}</span> / 10</Box>
       <span>|</span>
       <Box>{item['release_date'] || item['first_air_date']}</Box>
     </Box>
     {!mediaMatchesMaxWidth1000 && <Box sx={{
      fontFamily: "'Roboto Mono', monospace",
      width: mediaMatchesMaxWidth1414 ? '50%' : '40%',
      textAlign: 'left',
      lineHeight: 1.5
     }}>
       {mediaMatchesMaxWidth1414 ? `${item['description'].substring(0, 150)}...` : item['description']}
     </Box>}
     <Stack direction="row" sx={{gap: '1.5rem', fontSize: mediaMatchesMaxWidth900 ? '.8rem' : '1rem', '& > div p': {
      display: 'inline-block',
      marginRight: '1rem'
     }}}>
       <span>Genres: </span>
       <Stack direction="row" flexWrap="wrap">
         {item['genre_ids'].map(id => <p>{getGenre(id, genres)}</p>)}
       </Stack>
     </Stack>
     {/* {props.trailer_path} */}
   </Box>
}

export default MovieSummary