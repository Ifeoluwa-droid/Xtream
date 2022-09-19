import React from "react"
import DiscoverMovies from "./components/discover/Discover"
import Movies from "./components/movies/Movies"
import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import Tv from './components/tv/Tv'
import Search from './components/search/Search'
import MovieDetails from "./components/moviedetails/MovieDetails"
import AppLayout from "./components/sharedlayout/AppLayout"
import Footer from "./components/footer/Footer"
import SignIn from "./components/auth/SignIn"
import AuthPage from "./pages/auth/AuthPage"

const App = () => {
  return ( 
    <div>
      <main className='main'>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path="" element={<Navigate to="auth" replace />} />
            <Route path='discover'>
              <Route path="" element={<DiscoverMovies/>}></Route>
            </Route>
            <Route path='movies'>
              <Route path="" element={<Movies />}></Route>
            </Route>
            <Route path='tv'>
              <Route path="" element={<Tv/>}></Route>
            </Route>
            <Route path='search' element={<Search />}/>
          </Route>
          <Route path='/discover/:showType/:showId' element={<MovieDetails />} />
          <Route path='/movies/:showType/:showId' element={<MovieDetails />} />
          <Route path='/tv/:showType/:showId' element={<MovieDetails />} />
          <Route path='auth' element={<AuthPage/>}>
              <Route path="" element={<Navigate to="/auth/sign-in" replace />} />
              <Route path='sign-in'>
                <Route path="" element={<SignIn/>}></Route>
              </Route>
              <Route path='sign-up'>
                <Route path="" element={<SignIn/>}></Route>
              </Route>
            </Route>
        </Routes>
      </main>
      <Footer/>
    </div>
   );
}
 
export default App;


            
            
            
            