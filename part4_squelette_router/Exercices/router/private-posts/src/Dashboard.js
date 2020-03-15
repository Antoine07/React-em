import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink, Redirect } from "react-router-dom";

const posts = [
  { id: 16, title: "React JS", content: "Libraire ou Framework ?" },
  { id: 11, title: "React Native", content: "Mobile React" },
  { id: 100, title: "Angular", content: "Super ..." },
  { id: 7, title: "Symfony", content: "Framework expressif ..." },
  { id: 27, title: "MongoDB", content: "Base de données NoSQL" },
];

const Post = ({ match }) => {

  const post = posts.filter(({ id }) => id === parseInt(match.params.postId));

  if (post.length === 0) return(<p>Post not found</p>);

  const { title, content } = post.pop();

    return (
      <>
      <p>{title}</p>
      <p>{content}</p>
      </>
    );
}

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      logout: false
    }
  }

  render() {
    const token = localStorage.getItem('token');
    const { url, path } = this.props.match;

    const active = {
      fontWeight: "bold",
      color: "red"
    };

    if (token === 'false')
      return (
        <Redirect to={{ pathname: '/', state: { from: "/" } }} />
      )

    return (
      <>
        {
          token === 'true' ?
            <p>
              <button onClick={() => {
                localStorage.setItem('token', 'false');
                this.setState({ logout: true });
              }}>Sign out</button>
            </p> : null
        }
        <p>Bienvenu sur le Dashboard</p>
        <ul>
          {posts.map(({ title, id }) => (
            <li key={id}>
              <NavLink  activeStyle={active} to={`${url}/post/${id}`}>{title}</NavLink>
            </li>
          ))}
        </ul>
        <Route path={`${path}/post/:postId`} component={Post} />
      </>
    );
  }
}

export default Dashboard;
