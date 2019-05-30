import React from "react";
import Article from "../article/Article"
import PropTypes from "prop-types";
import "./ArticleList.css";
import BootstrapTable from 'react-bootstrap-table-next';


const columns = [{
    dataField: 'id',
    text: 'ID'
  }, {
    dataField: 'name',
    text: 'Nom'
  }];

function ArticleList(props) {
    return (
        <div className="articleList">
            <BootstrapTable keyField='id' data={ props.contacts } columns={ columns } />
        </div>
    );
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};
  
export default ArticleList;