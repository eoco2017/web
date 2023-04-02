import React,{Component} from "react";
import {nanoid} from 'nanoid'

export default class Header extends Component{
    
    handleChange = (e)=>{
        const {keyCode,target} = e
        if (keyCode!= 13) return
        this.props.getValue({
            id:nanoid,
            name:target.value,
            status:false
        })
    }
    render(){
        
        return (
            <div>
                <p></p>
                <input placeholder="
                输入" onKeyUp={this.handleChange}></input>
            </div>
        )
    }
}