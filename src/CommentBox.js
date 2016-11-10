import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';

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
