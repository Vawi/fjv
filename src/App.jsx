import React, {Component} from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import About from './components/About'
import Glossaire from './components/Glossaire'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";



class App extends Component {

  state = {
    articles: [],
  };

  getArticle() {
    return this.state.articles;
  }

  render() {
    localStorage.setItem('articles', this.state.articles);
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
            render={props => <Article {...props} articles={this.state.articles} />}
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
      <canvas className="background"></canvas>
      </div>
    )
  }
}

export default App;
