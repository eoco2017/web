# Getting Started with Create React App

# react项目
## 创建
npm i -g create-react-app
create-react-app react-projectname
es7-react语法提示插件vscode使用rrc快速创建页面

`npm start`
`npm run build`

## 规范
安装npm i nanoid生成唯一值

第三方插件放在页面上方
自己的放下方
样式放最后
印记中文网站

## 传值
兄弟组件传值
消息订阅与发布
npm i pubsub-js --save
import PubSub from 'pubsub-js'

## 路由
npm i react-router-dom
params to="/home/id" path="/home/:id" this.props.match.params
search to="/home?id=$name=" this.props.location.search
state
to={{pathname:'',state:{}}}
this.props.location.state
懒加载
npm i react-router-dom

## redux,react-redux


## npm i serve -g
配置服务器
serve build
