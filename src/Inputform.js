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
              <input type='text' placeholder='Name:' ref={(input) => this._author = input} />
            </div>
            <div className='input-widths'>
              <input type='text' placeholder='Comment:' className='textarea' ref={(input) => this._body = input} />
            </div>
            <div className='post-comment-button' type='submit' onClick={this._handleSubmit.bind(this)} >Post Comment</div>
          </form>
        </div>
      </div>
    )
  }

  _handleSubmit(event) {
    event.preventDefault();

    let author = this._author;
    let body = this._body;

    console.log(author.value, body.value);

    this.props.addComment(author.value, body.value);

    this._author.value = "";
    this._body.value = "";
  }
}

export default Inputform;
