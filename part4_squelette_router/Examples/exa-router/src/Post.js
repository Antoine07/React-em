import React, { Component } from 'react';

const POSTS = [
  { id: 1, title: "React Présentation", content: "Libraire ou Framework ?" },
  { id: 2, title: "React Les fondamentaux", content: "Libraire ou Framework ?" },
  { id: 16, title: "React JS", content: "Libraire ou Framework ?" },
  { id: 11, title: "React Native", content: "Mobile React" },
  { id: 100, title: "Angular", content: "Super ..." },
  { id: 7, title: "Symfony", content: "Framework expressif ..." },
  { id: 27, title: "MongoDB", content: "Base de données NoSQL" },
];

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