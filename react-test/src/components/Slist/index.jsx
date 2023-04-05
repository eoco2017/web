import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import Sitem from '../Sitem'

export default class Slist extends Component {
  // static propTypes = {
    // prop: PropTypes
  // }
  state = {
    searchData:[],
    isFirst:true,
    isLoading:false,
    err:''
  }
  componentDidMount(){
    const {} = this.state
    this.token = PubSub.subscribe('message',(msg,data)=>{
      this.setState(data)
    })
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
  render() {
    const {searchData,isFirst,isLoading,err} = this.state
    return (
      <div>
        {
          isFirst?<h1>hello</h1>:isLoading?<h2>loading</h2>:err?<h3>err</h3>:
          searchData.map(item=>{
            return (
              <li key={item.id}>{item.name}</li>
            )
          })
        }
      </div>
    )
  }
}
