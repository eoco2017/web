import React, { Component } from 'react'
import {Button} from 'antd'

export default class Demo extends Component {
    state = {
        count:0
    }
    add = ()=> {
        this.setState(({count})=>(
            {
                count:count+1
            }
        ))
    }
    render() {
        return (
            <div>
                <h1>total:{this.state.count}</h1>
                <Button type='primary' onClick={this.add}>add</Button>
            </div>
        )
    }
}
