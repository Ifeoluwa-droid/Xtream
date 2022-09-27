import React, { useState, useContext } from 'react'
import { styled, Tabs, useMediaQuery, Avatar, Stack, Button, colors as MUIcolors } from "@mui/material"
import Tab from "@mui/material/Tab"
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
import { AuthContext } from '../../store/auth'


 
const colors = []

for (const colorType in MUIcolors) {
    if (colorType !== 'common') {
        for (const type in MUIcolors[colorType]) {
            colors.push(MUIcolors[colorType][type])
        }
    } 
}

console.log(colors)

const Header = () => {

    const tabValue = useSelector(state => state.tab.selectedTab)

    const authCtx = useContext(AuthContext)

    const isLoggedIn = authCtx.isLoggedIn
    const username = authCtx.displayName

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

    const navigate = useNavigate()

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


    const handleSignIn = () => {
        navigate('/auth/sign-in')
    }

    return ( 
        <>
        <header className={classes.header} style={{
            justifyContent: mediaMatchesMinWidth900 ? 'space-between' : mediaMatchesMaxWidth700 ? 'space-between' : 'center',
            flexDirection: mediaMatchesMaxWidth700 ? 'row-reverse' : 'row',
            padding: mediaMatchesMaxWidth700 ? '.5rem 1.5rem' : '0 3rem'
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
           {!isLoggedIn && <Stack direction="row">
                <Button sx={{color: 'white', fontSize: mediaMatchesMaxWidth700 && '.7rem'}} onClick={handleSignIn}>SIGN IN</Button>
            </Stack>}
            {isLoggedIn && <Stack direction={mediaMatchesMaxWidth700 ? 'row-reverse' : 'row'} spacing={mediaMatchesMaxWidth700 ? ".7rem" : "1rem"}>
                <Button variant="text" sx={{color: "white", fontSize: mediaMatchesMaxWidth700 && '.7rem'}}>My list</Button>
                <Avatar sx={{backgroundColor: colors[Math.floor(Math.random() * colors.length)]}}>{username.substring(0,1)}</Avatar>
            </Stack>}
            {/* {mediaMatchesMinWidth900 && <div style={{visibility: 'hidden'}}>

            </div>} */}
        </header>
        </>
     );
}
 
export default Header;