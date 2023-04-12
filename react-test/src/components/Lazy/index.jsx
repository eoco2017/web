import React, { Component,Suspense,lazy } from 'react'
// import Home from '../../pages/Home'
// import About from '../../pages/About'
import { NavLink,Route,Switch,Redirect } from 'react-router-dom'

const Home = lazy(()=>import('../../pages/Home'))
const About = lazy(()=>import('../../pages/About'))

export default class Lazy extends Component {
  render() {
    return (
      <div>
        <NavLink to="/home">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <Switch>
          <Suspense fallback={<h1>Loading</h1>}>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Redirect to="/home"></Redirect>
          </Suspense>
        </Switch>
      </div>
    )
  }
}
