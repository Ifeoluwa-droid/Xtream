import { Stack, Typography, Avatar, useMediaQuery } from '@mui/material'
import React, {useState} from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const Review = props => {
  const {reviewer, avatar, rating, content} = props
  const [readMore, setReadMore] = useState(false)

  console.log(rating)


  const mediaMatchesMaxWidth900 = useMediaQuery('(max-width: 900px)')

  const toggleReadMore = () => {
    setReadMore(!readMore)
  }

  return (
    <Stack direction="row" 
      spacing="1rem" sx={{width: mediaMatchesMaxWidth900 ? '100%' : '25rem'}}> 
      <Avatar
        src={avatar}
      />
      <Stack direction="column" spacing=".5rem">
        <Typography variant="h3" component="h3" color="white">
          {reviewer}
        </Typography>
        <Typography variant="h3" component="h3" color="white" sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <StarRateRoundedIcon sx={{color: "yellow"}}/> <div style={{fontStyle: 'italic'}}>{rating}</div>
        </Typography>
        <Typography variant="h3" component="h3" color="white">
          {readMore ? content : content.slice(0, 200)} {!readMore && '...'} <span style={{color: 'yellow', cursor: 'pointer'}} onClick={toggleReadMore}>{!readMore ? 'Read More' : 'Read Less'}</span>
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Review