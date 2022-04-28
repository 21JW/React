import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Head extends Component {

  static propTypes={
    addItem:PropTypes.func.isRequired
  }

  // use addItem function provided in App to add a new Item
  handleKeyUp=(event)=>{
    // if it is not "Enter"(its keyCode is 13), do not submit 
    if(event.keyCode!==13) return
    if(event.target.value.trim()==='')
    {
      alert("Name is not allowed to be empty")
      return
    }
    // create an obj that contains all required information
    const newItem={id:nanoid(),name:event.target.value,done:false}
    this.props.addItem(newItem)
    // clear the name before
    event.target.value='';
  }

  render() {
    return (
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="Please write the things you have to do"/>
        </div>
    )
  }
}
