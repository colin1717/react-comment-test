import React, { Component } from 'react';
import './App.css';

class Inputform extends Component {
  render(){
    return(
      <div className='comment-box-top'>
        <h3 className='title'>Join the Discussion</h3>
        <div className='form-group'>
          <h4>New Comment</h4>
          <form>
            <div className='input-widths'>
              <input type='text' placeholder='Name:'/>
            </div>
            <div className='input-widths'>
              <input type='text' placeholder='Comment:' className='textarea'/>
            </div>
            <div className='post-comment-button'>Post Comment</div>
          </form>
        </div>
      </div>
    )
  }
}

export default Inputform;
