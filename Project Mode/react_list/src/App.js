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

  addItem=(newItem)=>{
    // get the current state of assignment, the name of it doesn't matter, it is ok to set it as A
    const A=this.state.assignment
    // add the newItem to A
    const newAssignment=[newItem,...A]
    // update the assignment
    this.setState({assignment:newAssignment})
  }

  updateAssignment=(id,done)=>{
    // get the current state of assignment
    const{assignment}=this.state;
    const newAssignment=assignment.map((obj)=>{
      if(obj.id===id) return{...obj,done}
      else return obj
    })
    this.setState({assignment:newAssignment})
  }

  render(){

    // const {assignment}=this.state
    return(
      <div className="todo-container">
        <div className="todo-wrap">
          <Head addItem={this.addItem}/>
          <List Assignment={this.state.assignment} updateAssignment={this.updateAssignment}/>
          <ChooseBox/>
        </div>
      </div>
    )
  }
}