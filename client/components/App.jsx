import React from 'react'
// import { Route } from 'react-router-dom'

// component imports
import Title from './Title'
import Nav from './Nav'
import AsciaCard from './AsciaCard'
import EpipenCard from './EpipenCard'
import ChildDisabilityCard from './ChildDisabilityCard'

function App () {
  return (
    <>
      <Nav />
      <Title />
      <AsciaCard />
      <EpipenCard />
      <ChildDisabilityCard />
    </>
  )
}

export default App
