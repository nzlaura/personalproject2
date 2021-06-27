import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'

import { ReactDOM } from 'react-dom'

function Nav () {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
        </IconButton>
        <Typography variant="h6" color="inherit">
      Allergy 101
        </Typography>
      </Toolbar>
    </AppBar>)
}

export default Nav
