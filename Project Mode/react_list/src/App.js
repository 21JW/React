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

  // update the status of the checkbox
   updateAssignment=(id,done)=>{
    // get the current state of assignment
    const{assignment}=this.state;
    // change the done state of he chekckbox
    const newAssignment=assignment.map((obj)=>{
      if(obj.id===id) return{...obj,done}
      else return obj
    })
    // update state
    this.setState({assignment:newAssignment})
  }

  deleteItemApp=(id)=>{
    // get the current state
    const{assignment}=this.state
    // delete the specific item by ID
    const newAssignment=assignment.filter((obj)=>{
      // it the item ID is not the target ID, pass. otherwise do not show
      return obj.id!==id
    })
    // update state
    this.setState({assignment:newAssignment})
  }

  render(){

    // const {assignment}=this.state
    return(
      <div className="todo-container">
        <div className="todo-wrap">
          <Head addItem={this.addItem}/>
          {/* assignment is a state updateAssignment is a function */}
          <List Assignment={this.state.assignment} updateAssignment={this.updateAssignment} deleteItemApp={this.deleteItemApp}/>
          <ChooseBox/>
        </div>
      </div>
    )
  }
}