import React from 'react'
import { Drawer as MUIDrawer } from '@mui/material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Movie, Tv } from '@mui/icons-material'
import { Home } from '@mui/icons-material'
import { Search } from '@mui/icons-material';
import { openDrawer as openReduxDrawer, closeDrawer as closeReduxDrawer } from '../../store/drawer';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


const Drawer = () => {

  const tabValueToRouteMap = {
    0: '/discover',
    1: '/movies',
    2: '/tv',
    3: '/search'
  }
  
  const open = useSelector(state => state.drawer.open)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeDrawer = () => {
    dispatch(closeReduxDrawer())
  }

  const openDrawer = () => {
    dispatch(openReduxDrawer())
  }

  const navigationClickHandler = (value) => {
    navigate(tabValueToRouteMap[value], {replace: true})
    closeDrawer()
  }

  return <MUIDrawer
            anchor='right'
            open={open}
            onClose={closeDrawer}
            onOpen={openDrawer}
            sx={{
                width: '40%',
                '& .MuiDrawer-paper': {
                  width: '40%',
                  height: '50vh'
                }
              }}
          >
           <Box
              role="presentation"
              onClick={() => {}}
              onKeyDown={() => {}}
            >
              <Box sx={{padding: '1rem'}}>
                <IconButton onClick={closeDrawer}>
                  <CloseIcon/>
                </IconButton>
              </Box>
              <List>
                {[{text: 'Discover', icon: <Home/>, clickHandler: () => {console.log('clicked'); navigationClickHandler(0)}}, {text: 'Movies', icon: <Movie />, clickHandler: () => {navigationClickHandler(1)}}, {text: 'Tv', icon: <Tv />, clickHandler: () => {navigationClickHandler(2)}}, {text: 'Search', icon: <Search/>, clickHandler: () => {navigationClickHandler(3)}}].map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton onClick={item.clickHandler}>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </MUIDrawer>
}

export default Drawer