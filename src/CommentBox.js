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
          {this._getComments()}
        </div>
      </div>
    )
  }

  _getComments() {
    const commentList = [
     { id: 1, author: "Neneh Cheery", body: "We always hang in a Buffalo Stance." },
     { id: 3, author: "Janet Jackson", body: "We are a part of the rhythm nation."}
   ];

   return commentList.map((comment) => {
     return (
       <Comment author={comment.author} body={comment.body} key={comment.id} />
     );
   });
  }
}

export default CommentBox;
