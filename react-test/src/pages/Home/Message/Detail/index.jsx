import React,{Component} from "react";
import qs from 'qs'

const Data = [{
    id:1,
    content:'aaaaaa'
},{
    id:2,
    content:'bbbbb'
},{
    id:3,
    content:'ccccc'
},{
    id:4,
    content:'dddddd'
}]

export default class Detail extends Component{
    
    render(){
        // const {id,title} = this.props.match.params
        // const {search} = this.props.location
        // const {id,title} = qs.parse(search.slice(1))
        const {id,title} = this.props.location.state || {}
        const {content} = Data.find((item)=>{return item.id == id})
        return (
            <div>
                <ul>
                    <li>{id}</li>
                    <li>{title}</li>
                    <li>{content}</li>
                </ul>
            </div>
        )
    }
}

