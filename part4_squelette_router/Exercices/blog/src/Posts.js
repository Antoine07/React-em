import React, { Component } from 'react';

import {
  Link
} from "react-router-dom";

class Posts extends Component {


  render() {

    const { posts } = this.props;

    return (
        <ul>
          {posts.map((post, k) => (
            <li key={k}><Link to={`/post/${post.id}`} >{post.title}</Link></li>
          ))}
        </ul>
    );
  }
}

export default Posts;
