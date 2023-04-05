import React,{Component} from "react";
import {Link,Route} from 'react-router-dom'
import Detail from "./Detail";

export default class Message extends Component{
    state = {
        messageArr:[{
            id:1,
            title:'message1'
        },{
            id:2,
            title:'message2'
        },{
            id:3,
            title:'message3'
        },{
            id:4,
            title:'message4'
        }]
    }
    replaceRoute = (id,title)=>{
        this.props.history.replace(`/home/message/detail/${id}/${title}`)
    }
    pushRoute = (id,title)=>{
        this.props.history.push(`/home/message/detail/${id}/${title}`)
    }
    render(){
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map(item=>{
                            return (
                                <li key={item.id}>
                                    <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
                                    <button onClick={()=>this.pushRoute(item.id,item.title)}>push</button>
                                    <button onClick={()=>this.replaceRoute(item.id,item.title)}>replace</button>
                                    {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
                                    {/* <Link to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link> */}
                                </li>
                            )
                        })
                    }
                </ul>
                <hr></hr>
                <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
                {/* <Route path="/home/message/detail" component={Detail}></Route> */}
            </div>
        )
    }
}