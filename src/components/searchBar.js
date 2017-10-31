import React, { Component } from 'react';

export default class SearchBar extends Component {

  state = {
    searchTerm: ''
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value })
    this.props.searchMovieHandler(this.state.searchTerm);
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.searchMovieHandler(this.state.searchTerm);
  // }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <input type='text' onChange={ this.handleChange } value={ this.state.searchTerm } />
      </form>
    )
  }
}