import React, { useCallback, useRef, useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies, setPage, setMoviesSummary, setTopKidMovies, setKidMoviesPage, setAnimations, setAnimationsPage } from '../../store/discover'
import { setGenres } from '../../store/genre'
import MovieCarousel from '../MovieCarousel/MovieCarousel'
import Category from '../Category/Category'
import useAxios from '../../hooks/useAxios'



const Movies = () => {
    const dispatch = useDispatch();

    const moviesData = useSelector(state => state.discover.moviesData)
    const moviesSummary = useSelector(state => state.discover.moviesData.moviesSummary)
    const genres = useSelector(state => state.genres.genres)

    const [fetchGenresError, setFetchGenresError] = useState(null)


    // Refs
    const kidMoviesSectionRef = useRef()
    const popularMovies = useRef()
    const animationsRef = useRef()

    // Url endpoints
    const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${moviesData.currentPage}`
    const topKidMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&certification_country=US&certification.lte=G&sort_by=popularity.desc&primary_release_year=2022&page=${moviesData.currentKidMoviesPage}`
    const animationsUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${moviesData.currentAnimationsPage}&with_genres=16`
    const movieGenresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    const tvGenresUrl = `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`


    const {isLoading: tmdbDataLoading, fetchError: tmdbDataFetchError} = useAxios(trendingUrl, setMovies, setMoviesSummary)
    const {isLoading: topKidMoviesDataLoading, fetchError: topKidMoviesFetchError} = useAxios(topKidMoviesUrl, setTopKidMovies)
    const {isLoading: animationsLoading, fetchError: animationsFetchError} = useAxios(animationsUrl, setAnimations)


    let tmdbContent;
    let topKidMoviesContent;
    let animationsContent;
    let carouselContent;

    if (tmdbDataFetchError) {
        tmdbContent = <h2>An error occurred!</h2>
        carouselContent = <div>An error occurred!</div>
    }

    if (topKidMoviesFetchError) {
        topKidMoviesContent = <h2>An error occurred!</h2>
    }

    if (animationsFetchError) {
        animationsContent = <h2>An error occurred!</h2>
                           
    }

    if (tmdbDataLoading) {
        tmdbContent = <h2>Loading!</h2>
        carouselContent = <div>Loading!</div>
    }

    if (topKidMoviesDataLoading) {
        topKidMoviesContent = <h2>Loading!</h2>
    }

    if (animationsLoading) {
        animationsContent = <h2>Loading!</h2>
                            
    }

    if (!tmdbDataLoading && moviesData && genres) {
        tmdbContent = <Category
                        setPage={setPage}
                        ref={popularMovies}
                        categoryHeading='Trending Shows'
                        categoryMovies={moviesData.movies}
                        pageCount={30}
                      />
        carouselContent = <MovieCarousel
                            moviesSummary={moviesSummary}
                          />
    }

    if (!topKidMoviesDataLoading && moviesData && genres) {
        topKidMoviesContent = <Category
                                setPage={setKidMoviesPage}
                                ref={kidMoviesSectionRef}
                                categoryHeading="General (Latest Releases)"
                                categoryMovies={moviesData.topKidMovies}
                                pageCount={moviesData.topKidMoviesCount}
                              />
    }

    if (!animationsLoading && moviesData && genres) {
        animationsContent = <Category
                                setPage={setAnimationsPage}
                                ref={animationsRef}
                                categoryHeading="Animations"
                                categoryMovies={moviesData.animations}
                                pageCount={moviesData.animationsCount}
                            />
    }

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

    return ( 
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {carouselContent}
                {tmdbContent}  
                {topKidMoviesContent}   
                {animationsContent} 
            </div>
        );
    }
 
export default Movies;