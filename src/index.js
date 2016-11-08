import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Comment from './Comment';
import CommentBox from './CommentBox';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<CommentBox />,document.getElementById('comment-container'));
