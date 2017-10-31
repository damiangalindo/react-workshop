import React, { Component } from 'react';
import './App.css';
import Movies from './containers/movies';
import Movie from './containers/movie';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/movies/:id' component={Movie}/>
          <Route path='/' component={Movies}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
