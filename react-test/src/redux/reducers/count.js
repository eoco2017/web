import {INCREMENT,DECREMENT} from '../constant'

const initState = 0
export default function countReducer(pre=initState,action) {
    const {type,data} = action
    switch(type){
        case INCREMENT:
            return pre + data
            // break;
        case DECREMENT:
            return pre - data
            // break;
        default:
            return pre
            // break;
    }



}






