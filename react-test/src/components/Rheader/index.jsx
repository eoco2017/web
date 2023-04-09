import React,{Component} from "react";
import {withRouter} from 'react-router-dom'
import {Button,DatePicker} from 'antd'
import {WechatOutlined} from '@ant-design/icons'

const {RangePicker} = DatePicker

class Sheader extends Component{
    back = ()=>{
        this.props.history.goBack()
    }
    pre = ()=>{
        this.props.history.goForward()
    }
    render(){
        return (
            <div>
                router-header
                <Button type="primary" onClick={this.back}>back</Button>
                <Button icon={<WechatOutlined></WechatOutlined>} onClick={this.pre}>pre</Button>
                <DatePicker></DatePicker>
                <RangePicker></RangePicker>
            </div>
        )
    }
}
export default withRouter(Sheader)
