import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar'
import Home from './components/layouts/Home'
import Footer from './components/layouts/Footer'
import './App.css'

const App = () => {
  return (
    <Fragment>
      <Router>
        
        <Navbar />

        <Switch>
          <Route exact path='/' component={ Home } />
        </Switch>

        <Footer />

      </Router>
    </Fragment>
  )
}

export default App
