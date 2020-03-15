import React, { Component } from 'react';

class Post extends Component{

  render(){

    const { post } = this.props;
    console.log(post);
      return (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      )
  }
}

export default Post;