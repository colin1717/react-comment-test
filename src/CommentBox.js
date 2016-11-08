import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';

class CommentBox extends Component {
  render(){
    const comments = this._getComments();
    return(
      <div className='comment-box'>
        <h3 className='title'>Join the Discussion</h3>
        <h3 className="comment-count">1 comment</h3>
        <div className='comment-list'>
          {comments}
        </div>
      </div>
    )
  }

  _getComments() {
    const commentList = [
     { id: 1, author: "Morgan McCircuit", body: "Great picture!" },
     { id: 2, author: "HandBanana", body: "Hey heheydhye"}
   ];

   return commentList.map((comment) => {
     return (
       <Comment author={comment.author} body={comment.body} key={comment.id} />
     );
   });
  }
}

export default CommentBox;
