import React from "react";
import PropTypes from "prop-types";
import "./styles/ArticleList.css";
import { Card, CardDeck } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import getArticlesList from '../API/articleAPI'

class ArticleList extends React.Component {

  constructor(props) {
    super(props)
    this._loadArticles = this._loadArticles.bind(this)
    this.state = {
      articles: [],
    }
  }

  componentDidMount() {
    this._loadArticles();
  }

  _loadArticles() {
      getArticlesList().then(data => {
          this.setState({
            articles: [ ...this.state.articles, ...data.results ],
          })
      })
    
  }

  render() {
    return (
      <div className="articleList">
          {this.state.articles.map((art) => 
          <CardDeck>
          <Card as={Link} to={"article/" + art.id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>{art.titre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" style={{ color: 'black' }}>{art.auteur}</Card.Subtitle>
            <Card.Text style={{ color: 'black' }}>
              {art.description}
            </Card.Text>
            <Card.Subtitle style={{ color: 'black' }}>{art.dateEcriture}</Card.Subtitle>
          </Card.Body>
        </Card>  
        </CardDeck>     
          )}
      </div>
  );
  }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    
};
  
export default ArticleList;