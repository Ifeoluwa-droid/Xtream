import { configureStore } from "@reduxjs/toolkit";
import discoverMovieReducer from './discover';
import tvSeriesReducer from './tv';
import movieReducer from './movie';
import genreReducer from './genre'
import drawerReducer from './drawer'


const store = configureStore({
    reducer: {
        discover: discoverMovieReducer,
        tvSeries: tvSeriesReducer,
        movies: movieReducer,
        genres: genreReducer,
        drawer: drawerReducer
    }
})

export default store;