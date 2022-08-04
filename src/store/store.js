import { configureStore } from "@reduxjs/toolkit";
import discoverMovieReducer from './discover';
import tvSeriesReducer from './tv';
import movieReducer from './movie';
import genreReducer from './genre'

const store = configureStore({
    reducer: {
        discover: discoverMovieReducer,
        tvSeries: tvSeriesReducer,
        movies: movieReducer,
        genres: genreReducer
    }
})

export default store;