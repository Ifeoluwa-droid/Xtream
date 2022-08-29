import React from 'react'
import { Drawer as MUIDrawer } from '@mui/material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Movie, Tv } from '@mui/icons-material'
import { Home } from '@mui/icons-material'
import { Search } from '@mui/icons-material';
import { openDrawer as openReduxDrawer, closeDrawer as closeReduxDrawer } from '../../store/drawer';
import { useSelector, useDispatch } from 'react-redux';


const Drawer = () => {
  
  const open = useSelector(state => state.drawer.open)

  const dispatch = useDispatch()

  const closeDrawer = () => {
    dispatch(closeReduxDrawer())
  }

  const openDrawer = () => {
    dispatch(openReduxDrawer())
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
                }
              }}
          >
           <Box
              role="presentation"
              onClick={() => {}}
              onKeyDown={() => {}}
            >
              <List>
                {[{text: 'Discover', icon: <Home/>}, {text: 'Movies', icon: <Movie />}, {text: 'Tv', icon: <Tv />}, {text: 'Search', icon: <Search/>}].map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton>
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