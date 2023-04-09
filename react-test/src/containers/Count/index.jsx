// import store from '../../redux/store'
import { Component } from 'react'
import {Select,Button} from 'antd'
import { connect } from 'react-redux'
import {increment,decrement,incrementAsync} from '../../redux/actions/count'

class CountUI extends Component {
    state = {
        value:0
    }
    handleChange = (value)=>{
        this.setState({
            value
        })
    }
    increment = ()=>{
        const {value} = this.state
        this.props.increment(value*1)
    }
    decrement = ()=>{
        const {value} = this.state
        this.props.decrement(value*1)
    }
    incrementIfOdd = ()=>{
        const {value} = this.state
        if (this.props.count % 2 !== 0 ) {
            this.props.increment(value*1)
        }
    }
    incrementAsync = ()=>{
        const {value} = this.state
        this.props.incrementAsync(value*1,1000)
    }
    
    render() {
        const {count,renshu} = this.props
        return (
            <div>
                <p>result:{count}</p>
                <p>person:{renshu}</p>
                <Select
                    defaultValue={3}
                    style={{
                        width: 120,
                    }}
                    onChange={this.handleChange}
                    options={[
                        {
                        value: '1',
                        label: '1',
                        },
                        {
                        value: '2',
                        label: '2',
                        },
                        {
                        value: '3',
                        label: '3',
                        },
                    ]}
                />
                <Button type="primary" onClick={this.increment}>+</Button>
                <Button onClick={this.decrement}>-</Button>
                <Button onClick={this.incrementIfOdd}>odd</Button>
                <Button onClick={this.incrementAsync}>async</Button>
            </div>
        )
    }
}

const mapStateToProps = state=>(
    {
        count:state.count,
        renshu:state.person.length
    }
)
const mapDispatchToProps = dispatch=>(
    {
        increment:data=>
            dispatch(increment(data))
        ,
        decrement:data=>
            dispatch(decrement(data))
        ,
        incrementAsync: (data,time) =>dispatch(incrementAsync(data,time))
    }
)
export default connect(
    mapStateToProps,
    // mapDispatchToProps,
    //也可以是对象，自动dispatch
    {
        increment,
        decrement,
        incrementAsync
    }
)(CountUI)


