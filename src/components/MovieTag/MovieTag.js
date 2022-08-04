import React from 'react'
import classes from './MovieTag.module.css';

const MovieTag = props => {
    return ( 
        <div className={`${classes['movie-tag']} ${props.className}`}>{props.tag}</div>
     );
}
 
export default MovieTag;