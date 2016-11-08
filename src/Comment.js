import React, { Component } from 'react';
import './App.css';

class Comment extends Component {
  render(){
    return(
      <div className="comment">
        <p className='comment-header'>{this.props.author}</p>
        <hr/>
        <p className='comment-body'>{this.props.body}</p>
      </div>
    )
  }
}

export default Comment;
