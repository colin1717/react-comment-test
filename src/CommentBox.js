import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';
import Inputform from './Inputform';

class CommentBox extends Component {
  constructor() {
    super();

    this.state = {
      showComments: false
    }
  }

  render(){
    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show Comments';
    if (this.state.showComments){
      commentNodes = <div className='comment-list'>{comments}</div>;
      buttonText = "Hide Comments";
    }

    return(
      <div className='comment-box'>
        <Inputform />
        <div className='comment-box-header'>
          <div className='comment-box-header-left'>
            <h3 className="comment-count">{this._commentCount(comments.length)}</h3>
          </div>
          <div className='comment-box-header-right'>
            <div className='show-comments-button' onClick={this._handleClick.bind(this)}>{buttonText}</div>
          </div>
        </div>
        {commentNodes}
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

  _handleClick(){
    this.setState({
      showComments: !this.state.showComments
    })
  }
}

export default CommentBox;
