import React, { Component } from 'react';
import {
        fetchMoviesDispatcher as fetchMovies,
        searchMoviesDispatcher as searchMovies,
      } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Pagination from '../components/pagination';
import SearchBar from '../components/searchBar';
import { Link } from 'react-router-dom';

class Movies extends Component {
  state = {
    currentPage: 1,
    totalPages: 1,
    list: 'popular'
  }

  componentWillMount() {
    this.props.fetchMovies('popular', 1)
  }

  componentDidMount() {
    this.setState({ totalPages: this.props.data.total_pages })
  }

  renderMovie = (movie) => {
    return(
      <li key={ movie.id }>
        <Link to={`/movies/${movie.id}`}>{ movie.original_title }</Link>
      </li>
    )
  }

  renderFilters = () => {
    return(
      <ul>
        <li><span><a href='#' onClick={ () => this.fetchMoviesList('popular', 1) }>Popular</a></span></li>
        <li><span><a href='#' onClick={ () => this.fetchMoviesList('top_rated', 1) }>Top Rated</a></span></li>
        <li><span><a href='#' onClick={ () => this.fetchMoviesList('upcoming', 1) }>Upcoming</a></span></li>
        <li><span><a href='#' onClick={ () => this.fetchMoviesList('now_playing', 1) }>Now Playing</a></span></li>
      </ul>
    )
  }

  fetchMoviesList = (list, page) => {
    this.props.fetchMovies(list, page);
    this.setState({list, currentPage: page})
  }

  render(){
    const movies = this.props.data.results;
    const { page, total_pages, total_results } = this.props.data;

    if(_.isEmpty(movies)){
      return <div>Loading...</div>
    }

    return(
      <div>
        { this.renderFilters() }
        <h1>Movies</h1>
        <SearchBar searchMovieHandler={ this.props.searchMovies }/>
        <ul>
          { movies.map((movie) => { return this.renderMovie(movie)}) }
        </ul>
        <div>
          <Pagination
            page={this.state.currentPage}
            pages={this.state.totalPages}
            fetchMoviesListHandler={ this.fetchMoviesList }
            list={this.state.list}
          />
          number of pages {total_pages}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: bindActionCreators(fetchMovies, dispatch),
    searchMovies: bindActionCreators(searchMovies, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);