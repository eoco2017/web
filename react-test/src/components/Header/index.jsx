import React,{Component} from "react";
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'

export default class Header extends Component{
    static propTypes = {
        getValue:PropTypes.func.isRequired
    }

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