import React,{Component} from 'react'
import './App.css'
import Head from './components/Head'
import List from './components/List'
import ChooseBox from './components/ChooseBox'


export default class App extends Component{
  render(){
    return(
      <div className="todo-container">
        <div className="todo-wrap">
          <Head/>
          <List/>
          <ChooseBox/>
        </div>
      </div>
    )
  }
}