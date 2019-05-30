import React, {Component} from 'react';
import './App.css';
import ArticleList from './components/articleList/ArtilcleList';
import About from './components/about/About'
import Glossaire from './components/glossaire/Glossaire'
import Header from './components/header/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';


const articles = [
  { id: 1, titre: "Leanne Graham", resume: "Pouet pouet", auteur: "meee" },
  { id: 2, titre: "Ervin Howell", resume: "tata", auteur: "mo" },
  { id: 3, titre: "Clementine Bauch", resume: "toto", auteur: "mu" },
  { id: 4, titre: "Patricia Lebsack", resume: "tutu", auteur: "ma" }
];

class App extends Component {

  state = {
    contacts: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const newContacts = response.data.map(c => {
          return {
            id: c.id,
            name: c.name
          };
        });

        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });

        this.setState(newState);
      })
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="App">
        <Router>
        <>
          <Header />
          <Route
            exact
            path="/articles"
            render={props => <ArticleList {...props} contacts={this.state.contacts} />}
          />
          <Route
            path="/about"
            render={props => <About {...props} />}
          />
          <Route
            path="/glossaire"
            render={props => <Glossaire {...props} />}/>
        </>
      </Router>

      </div>
    )
  }
}

export default App;
