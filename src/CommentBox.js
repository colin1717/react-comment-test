import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';

class CommentBox extends Component {
  render(){
    const comments = this._getComments();
    return(
      <div className='comment-box'>
        <div className='comment-box-header'>
          <div className='comment-box-header-left'>
            <h3 className='title'>Join the Discussion</h3>
            <h3 className="comment-count">{this._commentCount(comments.length)}</h3>
          </div>
          <div className='comment-box-header-right'>
            <div className='show-comments-button'>Show Comments</div>
          </div>
        </div>
        <div className='comment-list'>
          {comments}
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

  _commentCount(count) {
    if (count === 0){
      return "No comments yet";
    } else if (count === 1){
      return "1 comment";
    } else {
      return count + ' comments';
    }
  }
}

export default CommentBox;
