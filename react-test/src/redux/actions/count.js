import store from '../store'
import {INCREMENT,DECREMENT} from '../constant'

//同步action,即对象
export const increment = data =>(
    {
        type:INCREMENT,
        data
    }
)
export const decrement = data => (
    {
        type:DECREMENT,
        data
    }
)
//异步action,即action为函数
export const incrementAsync = (data,time) => {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(increment(data))
        },time)
    }
}


