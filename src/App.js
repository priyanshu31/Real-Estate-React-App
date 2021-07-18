import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar'
import Home from './components/layouts/Home'
import Footer from './components/layouts/Footer'
import './App.css'

const App = () => {

  let locations = [
    "Delhi NCR",
    "Mumbai",
    "Bangalore",
    "Pune",
    "Chennai",
    "Bhopal"
  ];

  let services = [
    "Buy",
    "Rent",
    "Plot",
    "Commercial"
  ];


  return (
    <Fragment>
      <Router>
        
        <Navbar locations = { locations } services = { services }/>

        <Switch>
          <Route exact path='/' component={ Home } />
        </Switch>

        <Footer locations = { locations } services = { services } />

      </Router>
    </Fragment>
  )
}

export default App
