import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {

  static propTypes={
    updateAssignmentList:PropTypes.func.isRequired,
    deleteItemList:PropTypes.func.isRequired,
  }

  // state:mouse means whether mouse enter this item. the initial state is false
  state={mouse:false}

  // when mouse enters handleMouse(true)=>set the state to true, making li style changes
  handleMouse=(flag)=>{
    return()=>{
      this.setState({mouse:flag})
    }
  }

  // app provides a function to list. This function is given to Item to let app get checkbox status
  handleCheck=(id)=>{
    return (event)=>{
      this.props.updateAssignmentList(id,event.target.checked)
    }
  }

  deleteItem=(id)=>{
    return ()=>{
      // alert('I am '+id);
      if(window.confirm("Are you sure to delete this item?"))
      {
         this.props.deleteItemList(id);
      }
    }
  }

  render() {
    return (
        <li style={{backgroundColor:this.state.mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
                <input type="checkbox" checked={this.props.done} onChange={this.handleCheck(this.props.id)}/>
                <span>{this.props.name}</span>
                {/* get the names written in App*/}
            </label>
            <button onClick={this.deleteItem(this.props.id)} className='btn btn-Delete' style={{display:this.state.mouse?'block':'none'}}>Delete</button>
        </li>
    );
  }
}

