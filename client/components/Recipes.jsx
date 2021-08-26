// API key to filter recipes by ingredient

import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react-dom'

function Recipes () {
  const [recipe, setRecipe] = useState({})
  function clickHandler (evt) {
    evt.preventDefault()
  }

  useEffect(() => {
    getRecipes()
      .then(result => {
        setRecipe(result)
        return null
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <>
      <p>Filter recipe options here</p>
      <Button onClick={clickHandler} variant="contained" color="secondary">
  Secondary
      </Button>
      <div>
        <Typography variant="h3">Recipe name</Typography>
        <p>Recipe logic will go here</p>
      </div>
    </>
  )
}

export default Recipes
