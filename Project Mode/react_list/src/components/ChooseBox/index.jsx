import React, { Component } from 'react';

export default class ChooseBox extends Component {
  render() {
    return (
        <div className="todo-footer">
        <label>
          <input type="checkbox"/>
        </label>
        <span>
          <span>Complete 0</span>/ All 2
        </span>
        <button className="btn-delete">Delete all completed assignments</button>
        </div>
    );
  }
}
