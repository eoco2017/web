import {legacy_createStore as createStore,applyMiddleware,combineReducers} from 'redux'
//异步请求中间件,action为函数
import thunk from 'redux-thunk'
import allReducer from './reducers'

export default createStore(allReducer,applyMiddleware(thunk))



