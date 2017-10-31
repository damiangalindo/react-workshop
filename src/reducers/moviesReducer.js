import { FETCH_MOVIES, FETCH_MOVIE, SEARCH_MOVIES } from '../constants'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.data;
    case FETCH_MOVIE:
      return action.data;
    case SEARCH_MOVIES:
      return action.data;
    default:
      return state;
  }
}