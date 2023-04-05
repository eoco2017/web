import React,{Component} from "react";

export default class Foot extends Component{



    render(){
        const {todoList} = this.props
        const total = todoList.length
        const finish = todoList.reduce((pre,cur)=>pre + (cur.status?1:0)
        ,0)
        return (
            <div>
                <input type="checkbox" checked={finish === total?true:false} />
                <span>finish{finish}</span>
                ////
                <span>total{total}</span>
            </div>
        )
    }
}












