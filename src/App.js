import React, { Component } from 'react'
import Home from './Page/Home'
import Profile from './Page/Profile'
import Skill from './Page/Skills'
import Contact from './Page/Contact'
import Work from './Page/Work'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Router>
        <Route path="/" exact component={Home} />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/skill" component={Skill} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
            <Redirect to='/'/>
          </Switch >
        </Router >
      </>
    )
  }
}

export default App
