import React from "react";
import PropTypes from "prop-types";
import "./ArticleList.css";
import BootstrapTable from 'react-bootstrap-table-next';


const columns = [{
    dataField: 'id',
    text: 'ID'
  }, {
    dataField: 'auteur',
    text: 'Auteur'
  }, {
    dataField: 'titre',
    text: 'Titre'
  }, {
    dataField: 'description',
    text: 'Description'
  }, {
    dataField: 'dateEcriture',
    text: 'Date d\'écriture'
  }];

function ArticleList(props) {
    return (
        <div className="articleList">
            <BootstrapTable keyField='id' data={ props.articles } columns={ columns } />
        </div>
    );
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};
  
export default ArticleList;