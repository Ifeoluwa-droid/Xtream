import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classes from './MovieCarousel.module.css';
import { useSelector } from 'react-redux/es/exports';


const MovieCarousel = (props) => {

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
          <Carousel 
            className={classes['carousel']}
            ariaLabel='Carousel'
            autoFocus={true}
            autoPlay={true}
            emulateTouch={true}
            infiniteLoop={true}
            interval={5000}
            showThumbs={false}
            transitionTime={500}
            useKeyboardArrows={true}
            showStatus={false}
            >
          
            {props.moviesSummary.map(item => {
            return <div className={classes['slide']}>
                <img src={item['slide_image']} />
                <div className={classes['blanket']}>
                  
                </div>
                <div className={classes['movie-summary']}>
                  <h2 className={classes['title']}>{item['title']}</h2>
                  <div>
                    <div className={classes['vote-average-wrap']}><span className={classes['vote-average']}>{item['vote_average']}</span> / 10</div>
                    <span>|</span>
                    <div>{item['release_date'] || item['first_air_date']}</div>
                  </div>
                  <div className={classes['description']}>
                    {item['description']}
                  </div>
                  <div className={classes['genres']}>
                    <span>Genres: </span>
                    <div>
                      {item['genre_ids'].map(id => <p>{getGenre(id, genres)}</p>)}
                    </div>
                  </div>
                  {/* {props.trailer_path} */}
                </div>
            </div>
            })}
          </Carousel>
      );
};

export default MovieCarousel