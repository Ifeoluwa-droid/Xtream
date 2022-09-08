import React from 'react'
import classes from './MovieCard.module.css'
import { useState } from 'react'
import MovieTag from '../movietag/MovieTag'
import { Box, Rating, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const MovieCard = props => {

    const [movieDescriptionIsShown, setmovieDescriptionIsShown] = useState(false)

    const mediaMatchesMaxWidth1000 = useMediaQuery('(max-width: 1000px)')

    const genres = useSelector(state => state.genres.genres)

    const navigate = useNavigate()

    const location = useLocation()

    const handleMouseOver = () => {
        setmovieDescriptionIsShown(true)
    }

    const handleMouseOut = () => {
        setmovieDescriptionIsShown(false)
    }

    const handleClick = (showId, mediaType) => {
        if (location.pathname.endsWith('/')) {
           navigate(`${location.pathname}${mediaType}/${showId}`)
        } else {
           navigate(`${location.pathname}/${mediaType}/${showId}`)
        }
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
            <Box>
                <div style={{width: mediaMatchesMaxWidth1000 ? '8rem' : '10rem'}} className={classes['movie-card']} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={() => {handleClick(props.id, props.mediaType)}}>
                    <img className={`${classes['movie-image']} ${movieDescriptionIsShown && classes['card-hovered']}`} src={props.imgSrc} alt="" />

                    {/* MovieDescription */}
                    {movieDescriptionIsShown && <div className={`${classes['movie-description']} ${movieDescriptionIsShown ? classes['slide-up'] : classes['slide-down']}`}>
                    {movieDescriptionIsShown && <div className={classes['name-and-date']}>
                        <p style={{fontSize: mediaMatchesMaxWidth1000 ? '.7rem' : '1rem'}}>{props.title}</p>
                        <p style={{fontSize: mediaMatchesMaxWidth1000 ? '.7rem' : '1rem'}}>{props.date}</p>
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
                {movieDescriptionIsShown &&  <ExitToAppSharpIcon className={classes['visit-icon']} fontSize='.5rem'/>}
                {movieDescriptionIsShown &&  <Rating name="read-only" value={(props.voteAverage / 2)} readOnly precision={0.1} sx={{position: 'absolute', zIndex: 1, left: '50%', transform: 'translateX(-50%)', top: '10%'}}/>}
               </div>
            </Box>
     );
}
 
export default MovieCard;