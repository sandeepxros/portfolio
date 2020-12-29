import React, { Component } from 'react'
import Home from './Page/Home'
import Navbar from './Page/Navbar'
import About from './Page/About'
import Portfolio from './Page/Portfolio'
import './Page/GlobalCss.css'
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>           
            <Navbar></Navbar> 
            <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/portfolio' component={Portfolio}/>
           </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App
