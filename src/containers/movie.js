import React, { Component } from 'react';
import {
        fetchMovieDispatcher as fetchMovie
      } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class Movie extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovie(id);
  }

  renderMembers(members) {
    if(_.isEmpty(members)) {
      return <div></div>
    }
    return members.map((member) => {
      return <li key={member.cast_id || member.credit_id}>{ member.name } { member.department }</li>
    })
  }

  render() {
    const { movie } = this.props;
    const { credits } = movie;

    if(_.isEmpty(movie) || _.isEmpty(credits)){
      return <div>Loading...</div>
    }else{
      const date = new Date(movie.release_date);
      const { crew, cast } = credits
      return(
        <div>
          <Link to='/'>Back</Link>
          <h1>{ movie.title }({ date.getFullYear() })</h1>
          <span>User Score { movie.vote_average }</span>
          <h2>Featured Crew</h2>
          <ul>
            { this.renderMembers(crew) }
          </ul>
          <h2>Cast</h2>
          <ul>
            { this.renderMembers(cast) }
          </ul>
          <h2>Overview</h2>
          <span>{ movie.overview }</span>
          <h2>Videos</h2>

        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    movie: state.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMovie: bindActionCreators(fetchMovie, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);