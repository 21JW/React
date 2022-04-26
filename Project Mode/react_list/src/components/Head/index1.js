import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Head extends Component {

  handleKeyUp=(event)=>{
    // if it is not "Enter"(its keyCode is 13), do not submit 
    if(event.keyCode!=13) return
    const newItem={id:nanoid(),name:event.target.value,done:false}
    this.props.addItem(newItem)
  }

  render() {
    return (
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="Please write the things you have to do"/>
        </div>
    )
  }
}