// import React, { Component } from 'react'
// import {Select,Button} from 'antd'
// import store from '../../redux/store'
// import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
// export default class Count extends Component {
//     state = {
//         value:0
//     }
//     // componentDidMount(){
//     //     //redux中状态变化
//     //     store.subscribe(()=>{
//     //        this.setState({}) 
//     //     })
//     // }

//     handleChange = (value)=>{
//         this.setState({
//             value
//         })
//     }
//     increment = ()=>{
//         const {value} = this.state
//         store.dispatch(
//             createIncrementAction(value*1)
//         )
//     }
//     decrement = ()=>{
//         const {value} = this.state
//         store.dispatch(createDecrementAction(value*1))
//     }
//     incrementIfOdd = ()=>{
//         const {value} = this.state
//         const count = store.getState()
//         if (count % 2 !== 0 ) {
//             store.dispatch(
//                 createIncrementAction(value*1)
//             )
//         }
        
//     }
//     incrementAsync = ()=>{
//         const {value} = this.state
//         // setTimeout(()=>{
//             store.dispatch(
//                 createIncrementAsyncAction(value*1,1000)
//             )
//         // },1000)
//     }
//     render() {
//         const {count} = this.state
//         return (
//             <div>
//                 <p>result:{store.getState()}</p>
//                 <Select
//                     style={{
//                         width: 120,
//                     }}
//                     onChange={this.handleChange}
//                     options={[
//                         {
//                         value: '1',
//                         label: '1',
//                         },
//                         {
//                         value: '2',
//                         label: '2',
//                         },
//                         {
//                         value: '3',
//                         label: '3',
//                         },
//                     ]}
//                 />
//                 <Button type="primary" onClick={this.increment}>+</Button>
//                 <Button onClick={this.decrement}>-</Button>
//                 <Button onClick={this.incrementIfOdd}>odd</Button>
//                 <Button onClick={this.incrementAsync}>async</Button>
//             </div>
//         )
//     }
// }

