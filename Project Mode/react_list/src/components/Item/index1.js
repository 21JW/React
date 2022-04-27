import React, { Component } from 'react';
import './index.css'


export default class Item extends Component {
  render() {

    return (
        <li>
            <label>
                <input type="checkbox" defaultChecked={this.props.done}/>
                <span>{this.props.name}</span>
                {/* get the names written in App*/}
            </label>
            <button className='btn-Delete' style={{display:'none'}}>Delete</button>
        </li>
    );
  }
}