import React,{Component} from 'react'
import './App.css'
import Head from './components/Head'
import List from './components/List'
import ChooseBox from './components/ChooseBox'


export default class App extends Component{

  state={assignment:[
    {id:'001',name:'Swimming',done:true},
    {id:'002',name:'Running',done:true},
    {id:'003',name:'Programing',done:false},
    {id:'004',name:'Learning',done:true},
    {id:'005',name:'Traveling',done:false},

  ]}

  render(){

    const {assignment}=this.state
    return(
      <div className="todo-container">
        <div className="todo-wrap">
          <Head/>
          <List Assignment={assignment}/>
          <ChooseBox/>
        </div>
      </div>
    )
  }
}