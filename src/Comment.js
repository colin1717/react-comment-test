import React, { Component } from 'react';
import './App.css';

class Comment extends Component {
  render(){
    return(
      <div className="comment">
        <p className='comment-header'>User Name</p>
        <hr/>
        <p className='comment-body'>blah blah blah blah</p>
      </div>
    )
  }
}

export default Comment;
