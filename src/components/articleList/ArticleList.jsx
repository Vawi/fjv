import React from "react";
import PropTypes from "prop-types";
import "./ArticleList.css";
import { Card, CardDeck } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function ArticleList(props) {

    return (
        <div className="articleList">
            {props.articles.map((art) => 
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

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    
};
  
export default ArticleList;