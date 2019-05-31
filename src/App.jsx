import React, {Component} from 'react';
import './App.css';
import ArticleList from './components/articleList/ArticleList';
import Article from './components/article/Article';
import About from './components/about/About'
import Glossaire from './components/glossaire/Glossaire'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';



class App extends Component {

  state = {
    articles: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:9001/api/Articles/All")
      .then(response => {
        const newArticles = response.data.map(c => {
          return {
            id: c.id,
            auteur: c.auteur,
            titre: c.titre,
            description: c.description,
            texte: c.texte,
            dateEcriture: c.dateEcriture,
          };
        });

        const newState = Object.assign({}, this.state, {
          articles: newArticles
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
            path="/"
            render={props => <Home {...props} />}
          />
          <Route
            exact
            path="/articles"
            render={props => <ArticleList {...props} articles={this.state.articles} />}
          />
          <Route
            path={'/article/:id'}
            render={props => <Article {...props} articles={this.state.articles}/>}
          />
          <Route
            path="/about"
            render={props => <About {...props} />}
          />
          <Route
            path="/glossaire"
            render={props => <Glossaire {...props} />}
          />
        </>
      </Router>
      <Footer/>
      </div>
    )
  }
}

export default App;
