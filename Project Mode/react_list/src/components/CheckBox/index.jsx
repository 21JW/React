import React, { Component } from 'react';
import './index.css'


export default class CheckBox extends Component {

  // provide the checked status to App
  handleCheckAll=(event)=>{
    this.props.checkAllApp(event.target.checked);
  }

  render() {
    const{Assignment}=this.props
    // Assignment is an array, TotalNum is the total number of tha array
    const TotalNum=Assignment.length
    //count done items 
    const doneCount=Assignment.reduce((pre,obj)=>{return pre+(obj.done?1:0)},0)

    return (
        <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===TotalNum&&TotalNum!==0?true:false}/>
        </label>
        <span>
          <span>Complete {doneCount}</span>/ All {TotalNum}
        </span>
        <button className="btn btn-delete">Delete all completed assignments</button>
        </div>
    );
  }
}
