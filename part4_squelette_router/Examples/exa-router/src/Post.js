import React, { Component } from 'react';

class Post extends Component{

  render(){

    console.log(this.props);

    const { id } = this.props.match.params;

    const post = POSTS.filter( p => p.id == id )[0];

    if(post)
      return (
        <>
        <p>post : {id} </p>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        </>
      )
    else 
      return (
        <>
        <p>Désolé il n'y a pas de post</p>
        </>
      )
  }
}

export default Post;