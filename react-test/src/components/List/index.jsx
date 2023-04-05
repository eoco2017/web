import React,{Component} from "react";
import PropTypes from 'prop-types'
import Item from '../Item'

export default class List extends Component{
    static propTypes = {
        todoList: PropTypes.array.isRequired,
        changeStatus: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired
    }

    render(){
        const {todoList,changeStatus,deleteItem} = this.props
        return (
            <div>
                <ul>
                    {
                        todoList.map((item,index)=>{
                            return <Item key={item.id} {...item} changeStatus={changeStatus} deleteItem={deleteItem}></Item>
                        })
                    }
                </ul>
            </div>
        )
    }
}






