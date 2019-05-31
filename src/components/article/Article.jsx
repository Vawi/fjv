import React, { Component} from "react";
import "./Article.css";
import PropTypes from "prop-types";

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
            <div className="article">
                <h1>{article[0].titre}</h1>
                <div className="row">
                    <div>
                       <ul>
                           <li><strong>Titre</strong>: {article[0].titre}</li>
                           <li><strong>Description</strong>: {article[0].description}</li>
                           <li><strong>Texte</strong>: {article[0].texte}</li>
                           <li><strong>Auteur</strong>: {article[0].auteur}</li>
                       </ul>
                    </div>
                </div>
            </div>
        );
    }
}

Article.propTypes = {
    articles: PropTypes.array.isRequired
};

export default Article