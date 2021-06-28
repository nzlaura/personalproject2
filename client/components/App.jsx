import React from 'react'
import { Route } from 'react-router-dom'

// component imports
import Title from './Title'
import Nav from './Nav'
// import Ascia from './Ascia'

function App () {
  return (
    <>
      {/* <Route path="/" component={Nav} /> */}
      <Route path="/" component={Title} />
      {/* <Route exact path="/ASCIA" component={Ascia} /> */}
    </>
  )
}

export default App
