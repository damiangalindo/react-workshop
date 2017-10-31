import React, { Component } from 'react';
import _ from 'lodash';

export default (props) => {
  const { page, pages, fetchMoviesListHandler, list } = props;

  switch (page) {
    case 1:
      console.log('page 1')
      return (
        <div>
        1
        <a href='#' onClick={() => fetchMoviesListHandler(list, page + 1)}>Next</a>
        </div>
      )
    case pages:
      return (
        <div>
        <a href='#' onClick={() => fetchMoviesListHandler(list, page - 1)}>Prev</a>
        {page}
        </div>
      )
    default:
      return (
        <span>
          <a href='#' onClick={() => fetchMoviesListHandler(list, page - 1)}>Prev</a>
          {page}
          <a href='#' onClick={() => fetchMoviesListHandler(list, page + 1)}>Next</a>
        </span>
      )
  }
}