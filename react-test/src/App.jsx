import React,{Component} from 'react'
import axios from 'axios'
import Main from './components/Main'
import Search from './components/Search'

export default class App extends Component{
  render(){
    return (
      <div>
        {/* <Main></Main> */}
        <Search></Search>
      </div>
    )
  }
}