import React, { Component,useState,useEffect,useRef,Fragment } from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd'

// class Myhook extends Component {
//     state={count:0}
//     add = ()=> {
//         this.setState(({count})=>(
//             {
//                 count:count+1
//             }
//         ))
//     }
//     render() {
//         return (
//         <div>
//             <div>
//                     <h1>total:{this.state.count}</h1>
//                     <Button type='primary' onClick={this.add}>add</Button>
//                 </div>
//         </div>
//         )
//     }
// }
function Myhook(){
    const [count,setCount] = useState(0)
    const myRef = useRef()
    function add (){
        // setCount(count+1)
        setCount((count)=>{
            return count+1
        })
    }
    function destory(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function show() {
        alert(myRef.current.value)
    }
    useEffect(()=>{
        setCount(count=>count+1)
        // return ()=>{
        //     alert(2)
        // }
    },[])
    return (
        <div>
            <input ref={myRef}></input>
            <h2>{count}</h2>
            <Button type='primary' onClick={add}>add</Button>
            <Button onClick={destory}>destory</Button>
            <Button onClick={show}>show</Button>
        </div>
    )
}

export default Myhook