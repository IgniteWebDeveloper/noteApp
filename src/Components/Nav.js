import React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, IconButton} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom';



const Nav = () => {
  return <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Notes
      </Typography>
      <Button><NavLink style={{textDecoration: 'none', color: 'white'}} color="inherit" exact to="/" >Home</NavLink></Button>
      <Button><NavLink style={{textDecoration: 'none', color: 'white'}} color="inherit" to="/create" >Create</NavLink></Button>
      <Button><NavLink style={{textDecoration: 'none', color: 'white'}} color="inherit" to="/update" >Update</NavLink></Button>
      <Button><NavLink style={{textDecoration: 'none', color: 'white'}} color="inherit" to="/trash" >Trash</NavLink></Button>
    </Toolbar>
  </AppBar>
</Box>
};

export default Nav;
