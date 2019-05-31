import React, { Component} from "react";
import "./Article.css";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            id: 0 };
      }

    componentWillMount() {
        this.handleChange();
    }

    handleChange() {        
        this.setState({
            id : this.props.match.params.id
        })
    }

    
    render(){
        const id = this.props.match.params.id;
        console.log("Map en cours")
        console.log(this.props.articles);
        const article = this.props.articles.filter(art => {
            if(art.id == id) {
                return art;
            }
        });
        console.log(id);
        return (
            <div>
                <Col col={2}>
                </Col>
                <Col col={8}>
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
                <Col col={2}>
                </Col>
            </div>
        );
    }
}

Article.propTypes = {
    articles: PropTypes.array.isRequired
};

export default Article