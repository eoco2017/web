import React,{Component} from "react";
import Item from '../Item'

export default class List extends Component{

    render(){
        const {todoList,changeStatus} = this.props
        return (
            <div>
                <ul>
                    {
                        todoList.map((item,index)=>{
                            return <Item key={item.id} {...item} changeStatus={changeStatus}></Item>
                        })
                    }
                </ul>
            </div>
        )
    }
}






