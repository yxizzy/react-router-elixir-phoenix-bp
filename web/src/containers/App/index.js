// @flow
import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router';
import Home from '../Home';
import NotFound from '../../components/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exactly pattern="/" component={Home} />
          <Route component={NotFound} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;