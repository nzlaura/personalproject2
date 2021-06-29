import React from 'react'
// import { Route } from 'react-router-dom'

// component imports
import Title from './Title'
import Nav from './Nav'
import AsciaCard from './AsciaCard'
import EpipenCard from './EpipenCard'
import ChildDisabilityCard from './ChildDisabilityCard'
import Sidebar from './Sidebar'

function App () {
  return (
    <>
      <Nav />
      <Title />
      <Sidebar />
      <AsciaCard />
      <EpipenCard />
      <ChildDisabilityCard />
    </>
  )
}

export default App
