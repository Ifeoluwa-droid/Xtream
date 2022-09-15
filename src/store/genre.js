import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    genres: []
}

const genreSlice= createSlice({
    name: 'genre',
    initialState,
    reducers: {
        setGenres(state, {payload}) {
            state.genres = payload.map(genreObject => ({
                id: genreObject.id,
                name: genreObject.name
            }))
        }
    }
});


export const { setGenres } = genreSlice.actions
export default genreSlice.reducer


