import React from "react";
import Header from "./components/Header/Header";
import DiscoverMovies from "./components/Discover/Discover";
import Movies from "./components/Movies/Movies";
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Tv from './components/Tv/Tv';
import Search from './components/Search/Search';
import MovieDetails from "./components/MovieDetails/MovieDetails";
import AppLayout from "./components/sharedlayout/AppLayout";

const App = () => {
  return ( 
    <div>
      <main className='main'>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path="" element={<Navigate to="/discover" replace />} />
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
        </Routes>
      </main>
    </div>
   );
}
 
export default App;


            
            
            
            