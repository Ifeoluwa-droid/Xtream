import React from 'react'
import classes from './MovieCard.module.css';
import { useState } from 'react';
import MovieTag from '../MovieTag/MovieTag';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

const MovieCard = props => {

    const [movieDescriptionIsShown, setmovieDescriptionIsShown] = useState(false)

    const genres = useSelector(state => state.genres.genres)

    const history = useHistory()

    const routeMatch = useRouteMatch()

    const handleMouseOver = () => {
        setmovieDescriptionIsShown(true)
    }

    const handleMouseOut = () => {
        setmovieDescriptionIsShown(false)
    }

    const handleClick = (movieId) => {
        history.push(`${routeMatch.path}/movies/${movieId}`)
    }

    const getGenre = (genreId, genreList) => {

        // the genre list can be undefined
        genreList = genreList.find(genreItem => genreItem.id === genreId)
        if (genreList) {
            return genreList.name
        }
        return 'Nil';
    }

    return ( 
        <Badge badgeContent={props.voteAverage} color="primary">
            <div className={classes['movie-card']} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={() => {handleClick(props.id)}}>
                <img className={`${classes['movie-image']} ${movieDescriptionIsShown && classes['card-hovered']}`} src={props.imgSrc} alt="" />

                {/* MovieDescription */}
                {movieDescriptionIsShown && <div className={`${classes['movie-description']} ${movieDescriptionIsShown ? classes['slide-up'] : classes['slide-down']}`}>
                {movieDescriptionIsShown && <div className={classes['name-and-date']}>
                    <p>{props.title}</p>
                    <p>{props.date}</p>
                </div>}
                {movieDescriptionIsShown && <div>{props.genres.map(
                    genre => {
                        return <MovieTag
                        className={classes['appear']}
                        tag={getGenre(genre, genres)}
                    />}
                )}</div>}
                </div>}

                {/* Cover */}
               {movieDescriptionIsShown && <div className={classes['cover']}>
                </div>}
               {movieDescriptionIsShown &&  <ExitToAppSharpIcon className={classes['visit-icon']}/>}
            </div>
        </Badge>  
     );
}
 
export default MovieCard;