import {React, Component} from "react";
import "./Article.css";
import PropTypes from "prop-types";

class Article extends Component {
    render(){
        
        const id = this.props.id;
        console.log('id = ' + id);
        
        const article = this.props.articles.filter(art => {
            if(art.id === id) {
                return art;
            } else {
                return null;
            }
        });
        return (
            
            <div>
                <h1>Article</h1>
                <h1>{article[0].name}</h1>
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
    articles: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired
};

export default Article