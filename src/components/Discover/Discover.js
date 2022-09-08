import React, { useCallback, useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies, setPage, setMoviesSummary, setKidMoviesPage, setAnimations, setAnimationsPage } from '../../store/discover'
import { setGenres } from '../../store/genre'
import MovieCarousel from '../moviecarousel/MovieCarousel'
import Category from '../category/Category'
import useAxios from '../../hooks/useAxios'
import ColumnStack from '../ui/ColumnStack'
import { getTrendingUrl, getTopKidMoviesUrl, getAnimationsUrl, movieGenresUrl, tvGenresUrl } from '../../utils/requests/endpoints'
import { Skeleton, CircularProgress } from '@mui/material'
import { CategorySkeleton } from '../category/Category'

const Movies = () => {
    const dispatch = useDispatch();

    const moviesData = useSelector(state => state.discover.moviesData)
    const moviesSummary = useSelector(state => state.discover.moviesData.moviesSummary)
    const genres = useSelector(state => state.genres.genres)

    const [fetchGenresError, setFetchGenresError] = useState(null)


    // Refs
    const popularMovies = useRef()
    const animationsRef = useRef()


    // Url endpoints
    const trendingUrl = getTrendingUrl(moviesData.currentPage)
    const animationsUrl = getAnimationsUrl(moviesData.currentAnimationsPage)

    const {isLoading: tmdbDataLoading, fetchError: tmdbDataFetchError} = useAxios(trendingUrl, setMovies, setMoviesSummary)
    const {isLoading: animationsLoading, fetchError: animationsFetchError} = useAxios(animationsUrl, setAnimations)

    
    const fetchGenres = useCallback(async () => {

        let movieData;
        let tvData;

        try {
            const rawMovieData = await fetch(movieGenresUrl)
            movieData = await rawMovieData.json()
            const rawTvData = await fetch(tvGenresUrl)
            tvData = await rawTvData.json()
        }
        catch (error) {
            setFetchGenresError(error.message)
        }

        if (!fetchGenresError) {
            const presentIds = movieData['genres'].map(item => item.id)
            const genreData = movieData['genres'].concat(tvData['genres'].filter(item => !presentIds.includes(item.id)))
            dispatch(setGenres(genreData))
        }
    }, [])

    useEffect(() => {
        fetchGenres();
    }, [])


    let tmdbContent;
    let animationsContent;
    let carouselContent;

    if (tmdbDataFetchError) {
        tmdbContent = <h2>An error occurred!</h2>
        carouselContent = <div>An error occurred!</div>
    }

    if (animationsFetchError) {
        animationsContent = <h2>An error occurred!</h2>                     
    }

    if (tmdbDataLoading) {
        tmdbContent = <CategorySkeleton />
        carouselContent = <div style={{height: '500px', width:'100%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
            <CircularProgress />
        </div>
    }

    if (animationsLoading) {
        animationsContent = <CategorySkeleton/>
                            
    }

    if (!tmdbDataLoading && moviesData && genres) {
        tmdbContent = <Category
                        setPage={setPage}
                        ref={popularMovies}
                        categoryHeading='Trending Shows'
                        categoryMovies={moviesData.movies}
                        pageCount={30}
                        currentPage={moviesData.currentPage}
                      />
        carouselContent = <MovieCarousel
                            moviesSummary={moviesSummary}
                          />
    }

    if (!animationsLoading && moviesData && genres) {
        animationsContent = <Category
                                setPage={setAnimationsPage}
                                ref={animationsRef}
                                categoryHeading="Animations"
                                categoryMovies={moviesData.animations}
                                pageCount={moviesData.animationsCount}
                                currentPage={moviesData.currentAnimationsPage}
                            />
    }

    return ( 
            <ColumnStack sx={{width: '100%'}}>
                {carouselContent}
                {tmdbContent}  
                {animationsContent} 
            </ColumnStack>
        );
    }
 
export default Movies;