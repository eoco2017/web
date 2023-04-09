import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button, Input} from 'antd'
import {nanoid} from 'nanoid'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {

    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value*1
        this.props.addPerson({
            id:nanoid,
            name,
            age
        })
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        const {person,count} = this.props
        return (
            <div>
                <p>total:{count}</p>
                <input ref={a=>this.nameNode = a}></input>
                <input ref={a=>this.ageNode = a}></input>
                <Button type='primary' onClick={this.addPerson}>add</Button>
                <ul>
                    {
                        person.map(item=>{
                            return <li key={item.id}>{item.name}-{item.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state=>({person:state.person,count:state.count}),
    {
        addPerson
    }
)(Person)