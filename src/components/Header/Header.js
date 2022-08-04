import React from 'react'
import { Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import classes from './Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { Movie, Tv } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from "react-router-dom";
import WindowIcon from '@mui/icons-material/Window';

const Header = () => {

    const [tabValue, setTabValue] = useState(0);


    const tabValueToRouteMap = {
      0: '/discover',
      1: '/movies',
      2: '/tv',
      3: '/search'
    }

    const history = useHistory();

    history.replace(tabValueToRouteMap[tabValue]);

    const tabValueChangeHandler = (event, newTabValue) => {
        setTabValue(newTabValue);
        history.push(tabValueToRouteMap[newTabValue]);
    }

    return ( 
        <header className={classes.header}>
            <p className={classes.logo}>MOVIE-FLEX</p>
            <Tabs value={tabValue} onChange={tabValueChangeHandler} centered>
                  <Tab 
                      icon={<HomeIcon/>}
                      iconPosition="start"
                      label="Discover" 
                      style={{textTransform: 'capitalize', margin: '0 1rem', color: '#fff'}}
                  />
                  <Tab 
                      icon={<Movie/>}
                      iconPosition="start"
                      label="Movies" 
                      style={{textTransform: 'capitalize', margin: '0 1rem', color: '#fff'}}
                  />
                  <Tab 
                      icon={<Tv/>}
                      iconPosition="start"
                      label="TV Shows"
                      style={{textTransform: 'capitalize', margin: '0 1rem', color: '#fff'}}
                  />
                  <Tab 
                      icon={<SearchIcon/>}
                      iconPosition="start"
                      label="Search"
                      style={{textTransform: 'capitalize', margin: '0 1rem', color: '#fff'}}
                  />
            </Tabs>
            <div style={{visibility: 'hidden'}}>

            </div>
        </header>
     );
}
 
export default Header;