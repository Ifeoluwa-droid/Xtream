import { createSlice } from "@reduxjs/toolkit"
import { original } from "../config/config"
import { current } from "@reduxjs/toolkit"

const initialState = {
    moviesData: {
        movies: [],
        moviesSummary: [],
        currentPage: 1,
        animations: [],
        animationsCount: 1, ///
        currentAnimationsPage: 1,
    }
}

const getBackdrops = (moviesData) => {
    return moviesData.map(movie => original + movie['backdrop_path'])
}

const movieSlice = createSlice({
    name: 'discover',
    initialState,
    reducers: {
        setMovies(state, {payload}) { // change to setShows later
            state.moviesData.movies = payload.results.slice(0, 30).map(item => ({
                'id': item['id'],
                'poster_path': item['poster_path'],
                'vote_average': item['vote_average'],
                'genre_ids': item['genre_ids'] || '',
                'title': item['title'] || item['name'],
                'release_date': item['release_date'] ? item['release_date'].slice(0, 4) : item['first_air_date'] ? item['first_air_date'].slice(0, 4) : '',
                'media_type': item['media_type']
            }));
        },
        setPage(state, {payload}) {
            state.moviesData.currentPage = payload
        },
        setMoviesSummary(state, {payload}) {
            state.moviesData.moviesSummary = payload.results.map(item => (
                {
                    'slide_image': original + item['backdrop_path'],
                    'title': item['title'] || item['name'],
                    'vote_average': item['vote_average'],
                    'release_date': item['release_date'] ? item['release_date'].slice(0, 4) : item['first_air_date'] ? item['first_air_date'].slice(0, 4) : '',
                    'description': item['overview'],
                    'genre_ids': item['genre_ids'] || []
                }
            ))
        },
        setKidMoviesPage(state, {payload}) {
            state.moviesData.currentKidMoviesPage = payload
        },
        setAnimations(state, {payload}) {
            console.log(payload)
            state.moviesData.animations = payload.results.map(item => ({
                'id': item['id'],
                'poster_path': item['poster_path'],
                'vote_average': item['vote_average'],
                'genre_ids': item['genre_ids'],
                'title': item['title'],
                'release_date': item['release_date'].slice(0, 4),
                'media_type': 'movie'
            }))

            state.moviesData.animationsCount = payload['total_pages']
        },
        setAnimationsPage(state, {payload}) {
            state.moviesData.currentAnimationsPage = payload
        }
        
    }
});


export const { setMovies, setPage, setMoviesSummary, setTopKidMovies, setKidMoviesPage, setAnimations, setAnimationsPage} = movieSlice.actions
export default movieSlice.reducer