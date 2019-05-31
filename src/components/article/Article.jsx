import React from "react";
import "./Article.css";
import PropTypes from "prop-types";

function Article(props) {
    return (
        <div className="article">
            <span>{props.name}</span>
        </div>
    );
}

Article.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  };

export default Article;