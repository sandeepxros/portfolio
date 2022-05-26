import React, { Component } from 'react'
import Home from './Page/Home'
import Navbar from './Page/Navbar'
import About from './Page/About'
import Portfolio from './Page/Portfolio'
import './Page/GlobalCss.css'
import {Routes, Route} from "react-router-dom"
import Error404 from './Error404'

class App extends Component {
  render() {
    return (
      <>         
            <Navbar></Navbar> 
            <Routes>
            <Route path='/' exact component={<Home/>}/>
            <Route path='/about' component={<About/>}/>
            <Route path='/portfolio' component={<Portfolio/>}/>
            <Route path="*" component={<Error404/>}/>
           </Routes>

      </>
    )
  }
}

export default App
