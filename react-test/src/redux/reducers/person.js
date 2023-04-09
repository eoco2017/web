import {AddPerson} from '../constant'

const initState = [{id:1,name:'tom',age:10}]
export default function personReducer(preState = initState,action){
    const {type,data} = action
    switch (type) {
        case AddPerson:
            return [data,...preState]
        default:
            return preState
    }
}

