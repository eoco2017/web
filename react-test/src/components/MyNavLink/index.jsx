import React,{Component} from "react";
import {NavLink, Route} from 'react-router-dom'

export default class MyNavLink extends Component{
    render(){
        return (
            <div>
                <NavLink activeClassName='active' {...this.props}></NavLink>
            </div>
        )
    }
}