import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';
import Inputform from './Inputform';

class CommentBox extends Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [
       { id: 1, author: "Neneh Cheery", body: "We always hang in a Buffalo Stance." },
       { id: 2, author: "Janet Jackson", body: "We are a part of the rhythm nation."}
     ]
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
        <Inputform addComment={this._addComment.bind(this)} />
        <div className='comment-box-header'>
          <div className='comment-box-header-left'>
            <h3 className="comment-count">{this._commentCount(this.state.comments.length)}</h3>
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

   return this.state.comments.map((comment) => {
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

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({
      comments: this.state.comments.concat([comment])
    });
  }
}

export default CommentBox;
