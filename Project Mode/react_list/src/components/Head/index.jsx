import React, { Component } from 'react'
import './index.css'

export default class Head extends Component {
  render() {
    return (
        <div className="todo-header">
            <input type="text" placeholder="Please write the things you have to do"/>
        </div>
    )
  }
}
