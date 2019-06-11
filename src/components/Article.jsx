import React, { Component} from "react";
import "./styles/Article.css";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            id: 0,
            articles: [] };
      }

    
    render(){
        const id = this.props.match.params.id;
        const article = this.props.articles.filter(art => {
            if(art.id === id) {
                return art;
            } else {
                return undefined
            }
        });
        return (
            <div>
                <Col xs={2}>
                </Col>
                <Col xs={8}>
                <div className="row">
                    <div className="article">
                       <ul>
                           <li>{article[0].titre}</li>
                           <br/>
                           <li>{article[0].auteur}</li>
                           <br/>
                           <li>{article[0].description}</li>
                           <br/>
                           <li> {article[0].texte}</li>
                           <br/>
                       </ul>
                    </div>
                </div>
                </Col>
                <Col xs={2}>
                </Col>
            </div>
        );
    }
}

Article.propTypes = {
    articles: PropTypes.array.isRequired
};

export default Article