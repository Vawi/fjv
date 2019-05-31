import React from "react";
import PropTypes from "prop-types";
import "./ArticleList.css";
import { Card, CardDeck } from 'react-bootstrap';

function ArticleList(props) {

    return (
        <div className="articleList">
          <CardDeck>
            {props.articles.map((art) => 
            <>
              <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{art.titre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{art.auteur}</Card.Subtitle>
                <Card.Text>
                  {art.description}
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">{art.dateEcriture}</Card.Subtitle>
                <Card.Link href="/article/:id">READ</Card.Link>
              </Card.Body>
            </Card>
            <br />
            </>
              )}
              </CardDeck>
        </div>
    );
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};
  
export default ArticleList;