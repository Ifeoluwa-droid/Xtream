import { createSlice } from "@reduxjs/toolkit"
import { original } from "@reduxjs/toolkit"


const initialState =  {
  similarMovies: []
}


const similarMoviesSlice = createSlice({
  name: 'similar',
  initialState,
  reducers: {
    setSimilar(state, {payload}) {
      state.similarMovies = payload.similar.results.map(item => ({
        'id': item['id'],
        'poster_path': item['poster_path'],
        'vote_average': item['vote_average'],
        'genre_ids': item['genre_ids'] || '',
        'title': item['title'] || item['name'],
        'release_date': item['release_date'] ? item['release_date'].slice(0, 4) : item['first_air_date'] ? item['first_air_date'].slice(0, 4) : '',
        'media_type': payload.showType
      }))
    },
    setPage(state, {payload}) {
      state.similarMovies.currentPage = payload
    }
  }
})


export const { setSimilar, setPage } = similarMoviesSlice.actions
export default similarMoviesSlice.reducer