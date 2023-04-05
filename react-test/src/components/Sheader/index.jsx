import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Sheader extends Component {
  // static propTypes = {
    // prop: PropTypes
  // }
  state = {
    keyword:''
  }
  handleSearch = ()=>{
    const {searchRef:{value:keyword}} = this
    this.setState({
      keyword
    })
    // this.props.updateStatus({
    //   isFirst:false,
    //   isLoading:true
    // })
    PubSub.publish('message',{
      isFirst:false,
      isLoading:true
    })
    setTimeout(()=>{
      PubSub.publish('message',{
        isLoading:false,
        searchData:[{
          id:'11',
          name:'new1'
        }]

      })
      // fetch('').then(()=>{
      //   alert(1)
      // },()=>{
      //   alert(2)
      // })
      // this.props.updateStatus({
      //   isLoading:false,
      //   searchData:[{
      //     id:'11',
      //     name:'new1'
      //   }]
      // })
    },1000)
    
  }

  render() {
    const {keyword} = this.state
    return (
      <div>
        <p>{keyword}</p>
        <input ref={a=>this.searchRef = a} type="text" />
        <button onClick={this.handleSearch}>search</button>
      </div>
    )
  }
}
