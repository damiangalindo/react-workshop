import { FETCH_MOVIES, FETCH_MOVIE, SEARCH_MOVIES } from '../constants';
import axiosRequest from '../utils';

const fetchMovies = (data) => {
  return(
    {
      type: FETCH_MOVIES,
      data
    }
  )
}

const fetchMovie = (data) => {
  return(
    {
      type: FETCH_MOVIE,
      data
    }
  )
}

const searchMovies = (data) => {
  return(
    {
      type: SEARCH_MOVIES,
      data
    }
  )
}

export const fetchMoviesDispatcher = (list, page) => {
  return (dispatch) => {
    const request = axiosRequest.get(`/movie/${list}`, {
                      params: {
                        page
                      }
                    }).then((response) => {
                      dispatch(fetchMovies(response.data));
                    });
  }
}

export const fetchMovieDispatcher = (movieId) => {
  return (dispatch) => {
    const request = axiosRequest.get(`/movie/${movieId}`, {
                      params: {
                        append_to_response: 'credits,keywords,videos,reviews,similar,images,changes'
                      }
                    }).then((response) => {
                      dispatch(fetchMovie(response.data));
                    });
  }
}

export const searchMoviesDispatcher = (searchTerm) => {
  return (dispatch) => {
    const request = axiosRequest.get('/search/movie', {
                      params: {
                        query: searchTerm
                      }
                    }).then((response) => {
                      dispatch(searchMovies(response.data));
                    });
  }
}