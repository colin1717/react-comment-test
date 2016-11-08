import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';

class CommentBox extends Component {
  render(){
    return(
      <div className='comment-box'>
        <h3 className='title'>Join the Discussion</h3>
        <h3 className="comment-count">1 comment</h3>
        <div className='comment-list'>
          <Comment />
        </div>
      </div>
    )
  }
}

export default CommentBox;
