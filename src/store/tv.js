import { createSlice } from "@reduxjs/toolkit";
import { original } from "../config/config";

const initialState = {
    tvSeriesData: {
        tvSeries: [],
        tvSummary: [],
        currentPage: 1,
    }
}

const getBackdrops = (moviesData) => {
    return moviesData.map(movie => original + movie['backdrop_path'])
}

const tvSeriesSlice = createSlice({
    name: 'tvSeries',
    initialState,
    reducers: {
        setTvSeries(state, {payload}) {
            state.tvSeriesData.tvSeries = payload.results
        },
        setPage(state, {payload}) {
            state.tvSeriesData.currentPage = payload
        },
        setTvSummary(state, {payload}) {
            state.tvSeriesData.tvSummary =  payload.results.map(item => (
                {
                    'slide_image': original + item['backdrop_path'],
                    'title': item['original_name'],
                    'vote_average': item['vote_average'],
                    'first_air_date': item['first_air_date'].slice(0, 4),
                    'description': item['overview'],
                    'genre_ids': item['genre_ids'],
                    'media_type': item['media_type']
                }
            ))
        }
    }
});


export const { setTvSeries, setPage, setTvSummary } = tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;