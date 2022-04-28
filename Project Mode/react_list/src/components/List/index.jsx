import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'


export default class List extends Component {

  // restrict the types of input
  static propTypes={
    Assignment:PropTypes.array.isRequired,
    updateAssignment:PropTypes.func.isRequired,
    deleteItemApp:PropTypes.func.isRequired
  }

  render() {
    const{Assignment}=this.props;
    return (
    <ul className="todo-main">
        {
          Assignment.map((obj)=>{
            return <Item key={obj.id} {...obj} updateAssignmentList={this.props.updateAssignment} deleteItemList={this.props.deleteItemApp}/>
            // return every Item/ get updateAssignment function from app and provide it to Item
          })
        }
    </ul>
    );
  }
}

