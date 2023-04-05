import React,{Component} from 'react'
import Header from '../Header'
import List from '../List'
import Foot from '../Foot'

export default class Main extends Component{
    state = {
        todoList:[{
            id:1,
            name:'apple',
            status:true
        },{
            id:2,
            name:'banana',
            status:false
        },{
            id:3,
            name:'orange',
            status:true
        }]
    }
    getValue = (obj)=>{
        const {todoList} = this.state
        const newArr = [obj,...todoList]
        this.setState({
            todoList:newArr
        })
        
    }
    changeStatus = (id,status)=>{
        const {todoList} = this.state
        const newArr = todoList.map((item)=>{
            if (item.id === id) {
                return {...item,status}
            } else {
                return item
            }
        })
        this.setState({
            todoList:newArr
        })
    }
    deleteItem = (id)=>{
        const {todoList} = this.state
        const newArr = todoList.filter((item)=>{
            return item.id != id
        })
        this.setState({
            todoList:newArr
        })
    }
    render(){
        return (
            <div>
                <Header getValue={this.getValue}></Header>
                <List todoList={this.state.todoList} changeStatus={this.changeStatus} deleteItem={this.deleteItem}></List>
                <Foot todoList={this.state.todoList}></Foot>
            </div>
        )
    }
}
