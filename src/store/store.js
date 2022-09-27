import { configureStore } from "@reduxjs/toolkit"
import discoverMovieReducer from './discover'
import tvSeriesReducer from './tv'
import movieReducer from './movie'
import genreReducer from './genre'
import drawerReducer from './drawer'
import similarMoviesReducer from './similar'
import tabReducer from './tab'
import emailSignUpReducer from "./emailSignUp"


const store = configureStore({
    reducer: {
        discover: discoverMovieReducer,
        tvSeries: tvSeriesReducer,
        movies: movieReducer,
        genres: genreReducer,
        drawer: drawerReducer,
        similar: similarMoviesReducer,
        tab: tabReducer,
        emailSignUp: emailSignUpReducer
    }
})

export default store;