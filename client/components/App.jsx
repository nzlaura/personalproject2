import React from 'react'
import { Route } from 'react-router-dom'

// imports to be shown across all routesgit a
// import Title from './Title'
import Nav from './Nav'
import Sidebar from './Sidebar'

// import cards for home page
import AsciaCard from './AsciaCard'
import EpipenCard from './EpipenCard'
import ChildDisabilityCard from './ChildDisabilityCard'
import SpecialistCard from './SpecialistCard'
import RecipesCard from './RecipesCard'

//  import components for routes
import Specialists from './Specialists'
import AsciaPage from './AsciaPage'
import EpipenPage from './EpipenPage'
import Recipes from './Recipes'
import CDAPage from './CDAPage'

function App () {
  return (
    <>
      <Route path="/" component={Nav} />
      <Route path="/" component={Sidebar} />
      <Route exact path="/" component={AsciaCard} />
      <Route exact path="/" component={EpipenCard} />
      <Route exact path="/" component={ChildDisabilityCard} />
      <Route exact path="/" component={SpecialistCard} />
      {/* <Route exact path="/" component={RecipesCard} /> */}
      <Route exact path="/specialists" component={Specialists} />
      <Route exact path="/epipen" component={EpipenPage} />
      <Route exact path="/recipes" component={Recipes} />
      <Route exact path="/ascia" component={AsciaPage} />
      <Route exact path="/CDA" component={CDAPage} />
    </>
  )
}

export default App

// how I want the app to work
