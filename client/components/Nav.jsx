import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'

function Nav () {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
        </IconButton>
        <Typography variant="h6" color="inherit">
      Allergy 101- Resources for navigating allergies in New Zealand
        </Typography>
      </Toolbar>
    </AppBar>)
}

export default Nav
