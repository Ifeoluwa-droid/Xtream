import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'
import classes from './MovieCarousel.module.css'
import { useSelector } from 'react-redux/es/exports'
import { useMediaQuery } from '@mui/material'
import StyledMovieCarousel from '../styled/StyledMovieCarousel'


const MovieCarousel = (props) => {

    const mediaMatchesMaxWidth1414 = useMediaQuery('(max-width: 1414px)')
    const mediaMatchesMaxWidth1000 = useMediaQuery('(max-width: 1000px)')
    const mediaMatchesMaxWidth900 = useMediaQuery('(max-width: 900px)')
    const mediaMatchesMaxWidth700 = useMediaQuery('(max-width: 700px)')
    const mediaMatchesMaxWidth550 = useMediaQuery('(max-width: 550px)')

    const genres = useSelector(state => state.genres.genres)

    const getGenre = (genreId, genreList) => {

      // the genre list can be undefined
      genreList = genreList.find(genreItem => genreItem.id === genreId);
      if (genreList) {
          return genreList.name
      }
      return 'Nil';
    }

      return (
          <StyledMovieCarousel>
            {props.moviesSummary.map(item => {
            return <div className={classes['slide']}>
                <img src={item['slide_image']} style={{width: '100%'}}/>
                <div className={classes['blanket']} style={{backgroundImage: 'linear-gradient(to left, rgba(0, 0, 0, .5) 40%, black), linear-gradient(to bottom, rgba(0, 0, 0, .5) 70%, black)', opacity: mediaMatchesMaxWidth550 ? 0.1 : 0.7}}>
                  
                </div>
                {<div className={classes['movie-summary']} style={{
                    position: mediaMatchesMaxWidth550 ? 'relative' : 'absolute',
                   justifyContent: mediaMatchesMaxWidth900 ? 'flex-end' : 'center',
                   paddingTop: mediaMatchesMaxWidth550 && '2rem',
                   paddingBottom: mediaMatchesMaxWidth900 ? mediaMatchesMaxWidth700 ? '2.5rem' : mediaMatchesMaxWidth550 ? '1.5rem' : '5rem' : '5rem',
                   gap: mediaMatchesMaxWidth700 ? '1rem' : '2rem'
                }}>
                  <h2 className={classes['title']} style={{fontSize: mediaMatchesMaxWidth900 ? mediaMatchesMaxWidth700 ? mediaMatchesMaxWidth550 ? '1.5rem' : '1.5rem' : '2rem' : '3rem', textAlign: 'left'}}>{item['title']}</h2>
                  <div style={{
                    width: mediaMatchesMaxWidth1000 ? '100%' : '30%',
                    gap: mediaMatchesMaxWidth1000 ? mediaMatchesMaxWidth700 ? '1rem' : '2rem' : '3rem'
                  }}>
                    <div className={classes['vote-average-wrap']}><span className={classes['vote-average']}>{String(item['vote_average']).slice(0,3)}</span> / 10</div>
                    <span>|</span>
                    <div>{item['release_date'] || item['first_air_date']}</div>
                  </div>
                  {!mediaMatchesMaxWidth1000 && <div className={classes['description']}>
                    {mediaMatchesMaxWidth1414 ? `${item['description'].substring(0, 150)}...` : item['description']}
                  </div>}
                  <div className={classes['genres']} style={{gap: '1.5rem', fontSize: mediaMatchesMaxWidth900 ? '.8rem' : '1rem'}}>
                    <span>Genres: </span>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                      {item['genre_ids'].map(id => <p>{getGenre(id, genres)}</p>)}
                    </div>
                  </div>
                  {/* {props.trailer_path} */}
                </div>}
            </div>
            })}
          </StyledMovieCarousel>
      );
};

export default MovieCarousel