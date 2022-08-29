import { createSlice } from "@reduxjs/toolkit";
import { original } from "../config/config";


const initialState = {
    moviesData: {
        movies: [],
        moviesSummary: [],
        currentPage: 1,
    }
}

const getBackdrops = (moviesData) => {
    return moviesData.map(movie => original + movie['backdrop_path'])
}


const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies(state, {payload}) {
            state.moviesData.movies = payload.results.map(item => ({
                'id': item['id'],
                'poster_path': item['poster_path'],
                'vote_average': item['vote_average'],
                'genre_ids': item['genre_ids'],
                'title': item['title'],
                'release_date': item['release_date'].slice(0, 4),
                'media_type': item['media_type']
            }))
        },
        setPage(state, {payload}) {
            state.moviesData.currentPage = payload
            console.log(state.moviesData.currentPage)
        },
        setMoviesSummary(state, {payload}) {
            state.moviesData.moviesSummary = payload.results.map(item => (
                {
                    'slide_image': original + item['backdrop_path'],
                    'title': item['title'],
                    'vote_average': item['vote_average'],
                    'release_date': item['release_date'].slice(0, 4),
                    'description': item['overview'],
                    'genre_ids': item['genre_ids']
                }
            ))
        }
    }
});


export const { setMovies, setPage, setMoviesSummary } = moviesSlice.actions;

export default moviesSlice.reducer;