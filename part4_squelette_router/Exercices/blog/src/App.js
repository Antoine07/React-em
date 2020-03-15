import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Posts from './Posts';
import Post from './Post';

const POSTS = [
  { id: 1, title: "React Présentation", content: "Libraire ou Framework ?" },
  { id: 2, title: "React Les fondamentaux", content: "Libraire ou Framework ?" },
  { id: 16, title: "React JS", content: "Libraire ou Framework ?" },
  { id: 11, title: "React Native", content: "Mobile React" },
  { id: 100, title: "Angular", content: "Super ..." },
  { id: 7, title: "Symfony", content: "Framework expressif ..." },
  { id: 27, title: "MongoDB", content: "Base de données NoSQL" },
];

class App extends Component {

  render() {

    return (
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Les articles</Link></li>
        </ul>
        <Switch>
          <Route exact path="/">
            <>
              <h1>Bienvenu sur la page d'accueil</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptas ipsum, molestias dolorum quibusdam animi nihil debitis error mollitia libero illo fugiat harum perferendis veniam qui praesentium suscipit excepturi voluptatem!</p>
            </>
          </Route>
          <Route 
            path="/posts" 
            children={(props) => (<Posts posts={POSTS} />)}
          />
          <Route  path="/post/:id" component={({match}) => {

            const id = match.params.id;
            const post = POSTS.filter(p => p.id == id);

            if(post)
              return (
                <Post post={post[0]} />
              );
              
            return(
              <p>Désolé mais il n'y a pas de post pour l'instant</p>
            );
          }} />
        </Switch>
      </Router>
    );
  }
}

export default App;