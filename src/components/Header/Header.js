import React from 'react'
import { styled, Tabs, useMediaQuery } from "@mui/material"
import Tab from "@mui/material/Tab"
import { useState } from "react"
import classes from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search'
import { Movie, Tv } from "@mui/icons-material"
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from "react-router-dom"
import WindowIcon from '@mui/icons-material/Window'
import { Outlet } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import {IconButton} from '@mui/material'
import { openDrawer as openReduxDrawer } from '../../store/drawer'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedTab } from '../../store/tab'
 
const Header = () => {


    const tabValue = useSelector(state => state.tab.selectedTab)

    const mediaMatchesMinWidth900 = useMediaQuery('(min-width: 900px)')
    const mediaMatchesMaxWidth700 = useMediaQuery('(max-width: 700px)')

    const dispatch = useDispatch()

    const tabValueToRouteMap = {
      0: '/discover',
      1: '/movies',
      2: '/tv',
      3: '/search'
    }

    const openDrawer = () => {
        dispatch(openReduxDrawer())
    }

    const navigate = useNavigate();

    // navigate(tabValueToRouteMap[tabValue], {replace: true});

    const tabValueChangeHandler = (event, newTabValue) => {
        dispatch(setSelectedTab(newTabValue))
        navigate(tabValueToRouteMap[newTabValue], {replace: true});
    }

    const StyledTab = styled(Tab)({
        textTransform: 'capitalize', 
        margin: '0 1rem', 
        color: '#fff',
        fontSize: !mediaMatchesMinWidth900 && '.8rem'
    })

    return ( 
        <>
        <header className={classes.header} style={{
            justifyContent: mediaMatchesMinWidth900 ? 'space-between' : mediaMatchesMaxWidth700 ? 'flex-end' : 'center',
            padding: mediaMatchesMaxWidth700 ? '0 1.5rem' : '0 3rem'
        }}>
            {mediaMatchesMinWidth900 && <p className={classes.logo}>Xtream</p>}
            {mediaMatchesMaxWidth700 && <IconButton onClick={openDrawer}><MenuIcon sx={{color: "white"}} /></IconButton>}
            {!mediaMatchesMaxWidth700 && <Tabs value={tabValue} onChange={tabValueChangeHandler} centered>
                  <StyledTab 
                      icon={<HomeIcon/>}
                      iconPosition="start"
                      label="Discover" 
                  />
                  <StyledTab 
                      icon={<Movie/>}
                      iconPosition="start"
                      label="Movies" 
                  />
                  <StyledTab 
                      icon={<Tv/>}
                      iconPosition="start"
                      label="TV Shows"
                  />
                  <StyledTab 
                      icon={<SearchIcon/>}
                      iconPosition="start"
                      label="Search"
                  />
            </Tabs>}
            {mediaMatchesMinWidth900 && <div style={{visibility: 'hidden'}}>

            </div>}
        </header>
        </>
     );
}
 
export default Header;