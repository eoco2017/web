import React,{Component} from "react";
import {NavLink, Route, Switch,Redirect} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from "./News";
import Message from "./Message";

export default class Home extends Component{
    render(){
        return (
            <div>
                <h2>home</h2>
                <MyNavLink to="/home/news" children="news"></MyNavLink>
                <MyNavLink to="/home/message" children="message"></MyNavLink>
                <Switch>
                    <Route path="/home/news" component={News}></Route>
                    <Route path="/home/message" component={Message}></Route>
                    <Redirect to="/home/news"></Redirect>
                </Switch>
            </div>
        )
    }
}

