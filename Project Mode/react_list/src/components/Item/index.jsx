import React, { Component } from 'react';
import './index.css'


export default class Item extends Component {
  // state:mouse means whether mouse enter this item. the initial state is false
  state={mouse:false}

  // when mouse enters handleMouse(true)=>set the state to true, making li style changes
  handleMouse=(flag)=>{
    return()=>{
      this.setState({mouse:flag})
    }
  }

  handleCheck=(id)=>{
    return (event)=>{
      this.props.updateAssignmentList(id,event.target.checked)
    }
  }

  render() {
    return (
        <li style={{backgroundColor:this.state.mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
                <input type="checkbox" defaultChecked={this.props.done} onChange={this.handleCheck(this.props.id)}/>
                <span>{this.props.name}</span>
                {/* get the names written in App*/}
            </label>
            <button className='btn btn-Delete' style={{display:this.state.mouse?'block':'none'}}>Delete</button>
        </li>
    );
  }
}

