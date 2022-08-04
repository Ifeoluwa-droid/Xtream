import React from "react";
import Header from "./components/Header/Header";
import DiscoverMovies from "./components/Discover/Discover";
import Movies from "./components/Movies/Movies";
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Tv from './components/Tv/Tv';
import Search from './components/Search/Search';
import MovieDetails from "./components/MovieDetails/MovieDetails";

const App = () => {
  return ( 
    <div>
      <Header />
      <main className='main'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/discover' />
          </Route>
          <Route path='/discover' exact>
            <DiscoverMovies/>
          </Route>
          <Route path='/movies' exact>
            <Movies />
          </Route>
          <Route path='/tv' exact>
            <Tv/>
          </Route>
          <Route path='/search' exact>
            <Search />
          </Route>
          <Route path='/discover/movies/:movieId' exact>
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </div>
   );
}
 
export default App;