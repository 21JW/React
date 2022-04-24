import React, { Component } from 'react';
import Item from '../Item'
import './index.css'


export default class List extends Component {
  render() {
    const{Assignment}=this.props;
    return (
    <ul className="todo-main">
        {
          Assignment.map((obj)=>{
            return <Item key={obj.id} {...obj}/>
            // display every Item
          })
        }
    </ul>
    );
  }
}

