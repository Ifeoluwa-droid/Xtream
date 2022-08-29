import { useMediaQuery } from '@mui/material';
import React from 'react'
import classes from './MovieTag.module.css';

const MovieTag = props => {

    const mediaMatchesMaxWidth1000 = useMediaQuery('(max-width: 1000px)')
    return ( 
        <div style={{fontSize: mediaMatchesMaxWidth1000 ? '.45rem' : '.6rem'}} className={`${classes['movie-tag']} ${props.className}`}>{props.tag}</div>
     );
}
 
export default MovieTag;