import React from 'react'
import Routes from './Routes'
import { Router } from 'react-router-dom'
import NavigationBar from '../shared/components/NavigationBar'
import history from '../History'

const App = () => {
  return (
    <Router history={history}>
      {/* <NavigationBar /> */}
      <Routes />
    </Router>
  )
}

export default App
