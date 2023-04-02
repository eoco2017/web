import React,{Component} from "react";

export default class Header extends Component{
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
    handleChange = (id)=>{
        return (event)=>{
            this.props.changeStatus(id,event.target.checked)
        }
        
    }
    render(){
        const {id,name,status} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor
            :mouse?'#ccc':'#fff'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" defaultChecked={status} onChange={this.handleChange(id)}/>
                    <span>{name}</span>
                </label>
                <button style={{display:'none'}}>delete</button>
            </li>
        )
    }
}