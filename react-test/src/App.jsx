import React,{Component} from 'react'
import axios from 'axios'
import {NavLink, Route, Switch,Redirect} from 'react-router-dom'
import Main from './components/Main'
import Search from './components/Search'
import Home from './pages/Home'
import About from './pages/About'
import Count from './pages/Count'
import Rheader from './components/Rheader'
import MyNavLink from './components/MyNavLink'
import store from './redux/store'
import RCount from './containers/Count'
import Person from './containers/Person'
import './App.css'

export default class App extends Component{
  componentDidMount(){
    //检测redux中状态变化，react-redux可以省略
    //store.subscribe(()=>{
      //this.setState({}) 
    //})
  }
  render(){
    return (
      <div>
        {/* todolist */}
        {/* <Main></Main> */}
        {/* search */}
        {/* <Search></Search> */}
        {/* router */}

        {/* <div>
          <Rheader></Rheader>
          <div className='main'>
              <div className='left'>
                  <MyNavLink to="/home" children="home"></MyNavLink>
                  <MyNavLink to="/about" children="about"></MyNavLink>
                  <MyNavLink to="/count" children="count"></MyNavLink>
              </div>
              <div> */}
                {/*注册路由*/}
                  {/* <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/count" component={Count}></Route>
                    <Redirect to="/home"></Redirect>
                  </Switch>
              </div>
          </div>
        </div> */}
        <RCount></RCount>
        <hr></hr>
        <Person></Person>
      </div>
    )
  }
}