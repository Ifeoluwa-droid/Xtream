import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies, setPage, setMoviesSummary } from '../../store/movie'
import { original } from '../../config/config'
import MovieCard from '../MovieCard/MovieCard'
import classes from './Movies.module.css'
import Pagination from '@mui/material/Pagination'
import MovieCarousel from '../MovieCarousel/MovieCarousel'
import useAxios from '../../hooks/useAxios'
import Header from '../Header/Header'


const Movies = () => {
    const dispatch = useDispatch()

    const moviesData = useSelector(state => state.movies.moviesData)
    const moviesSummary = useSelector(state => state.movies.moviesData.moviesSummary)

    const handlePageChange = useCallback((event, newPage) => {
        dispatch(setPage(newPage))
        window.scroll(0, 0);
    })

    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${moviesData.currentPage}`

    const {isLoading, fetchError} = useAxios(url, setMovies, setMoviesSummary)

    let content;

    if (fetchError) {
        content =  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2>An error occurred!</h2>
                </div>
    }

    if (isLoading) {
        content =  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <h2>Loading!</h2>  
                </div>
    }

    if (!isLoading && moviesSummary.length !== 0 && moviesData) {
        content = <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {moviesSummary.length !== 0 && <MovieCarousel
            moviesSummary={moviesSummary}
        />}

        {moviesData ? 
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className={classes.movies}>
                {moviesData.movies.map(movie => 
                        <MovieCard
                            mediaType={movie['media_type']}
                            key={movie['id']}
                            id={movie['id']}
                            imgSrc={`${original}${movie['poster_path']}`}
                            voteAverage={movie['vote_average']}
                            voteCount={movie['vote_count']}
                            genres={movie['genre_ids']}
                            title={movie['title']}
                            date={movie['release_date']}
                        />
                    )
                } 
            </div>
            <Pagination sx={{marginTop: 5}} count={500} color='primary' onChange={handlePageChange}/>
        </div> : <div>Loading movies.....</div>
        }     
    </div>
    }

    return <>
        {content}
    </>
}
 
export default Movies