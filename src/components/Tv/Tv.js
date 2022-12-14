import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setTvSeries, setPage, setTvSummary } from '../../store/tv'
import { original, unavailable } from '../../config/config'
import MovieCard from '../moviecard/MovieCard'
import classes from './Tv.module.css'
import MovieCarousel from '../moviecarousel/MovieCarousel'
import useAxios from '../../hooks/useAxios'
import Header from '../header/Header'
import Pagination from '../ui/Pagination'

const Movies = () => {
    const dispatch = useDispatch()

    const tvSeriesData = useSelector(state => state.tvSeries.tvSeriesData)
    const tvSummary = useSelector(state => state.tvSeries.tvSeriesData.tvSummary)

    const handlePageChange = useCallback((event, newPage) => {
        dispatch(setPage(newPage))
        window.scroll(0, 0);
    })

    const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${tvSeriesData.currentPage}`

    const {isLoading, fetchError} = useAxios(url, setTvSeries, setTvSummary)

    let content;

    if (fetchError) {
        content = <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2>An error occurred!</h2>
                  </div>
    } 
    
    if (isLoading) {
        content = <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2>Loading!</h2>
                </div>
    } 
    
    if (!isLoading && tvSummary.length !== 0 && tvSeriesData) {
        content = <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '2rem'}}>
                        {<MovieCarousel 
                            moviesSummary={tvSummary}
                        />}

                        {
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div className={classes.movies}>
                            {tvSeriesData.tvSeries.map(series => 
                                <MovieCard 
                                    mediaType={series['media_type']}
                                    key={series['id']}
                                    id={series['id']}
                                    imgSrc={series['poster_path'] ? `${original}${series['poster_path']}` : unavailable}
                                    voteAverage={series['vote_average']}
                                    voteCount={series['vote_count']}
                                    genres={series['genre_ids']}
                                    title={series['original_name']}
                                />
                            )} 
                        </div>
                        <Pagination
                            pageCount={500}
                            handlePageChange={handlePageChange}
                        />
                        </div>
                        }
                    </div>
    }
    return <>
        {content}
    </>
}
 
export default Movies;