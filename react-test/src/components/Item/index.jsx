import React,{Component} from "react";
import PropTypes from 'prop-types'

export default class Header extends Component{
    // static propTypes = {
    //     todoList: PropTypes.array.isRequired,
    //     changeStatus: PropTypes.func.isRequired
    // }
    state = {
        mouse: false
    }
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({
                mouse:flag
            })
        }
    }
    handleChange = (event,id)=>{
        this.props.changeStatus(id,event.target.checked)
        // return (event)=>{
        //     this.props.changeStatus(id,event.target.checked)
        // }
        
    }
    handleDelete = (id)=>{
        if (window.confirm('delete?')){
            this.props.deleteItem(id)
        }
        
    }

    render(){
        const {id,name,status} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor
            :mouse?'#ccc':'#fff'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" defaultChecked={status} onChange={(e)=>{this.handleChange(e,id)}}/>
                    <span>{name}</span>
                </label>
                <button style={{display:mouse?'block':'none',float:'right'}} onClick={()=>this.handleDelete(id)}>delete</button>
            </li>
        )
    }
}