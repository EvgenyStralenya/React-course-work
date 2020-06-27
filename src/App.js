import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { AppContainer } from './components';

export function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/not-found">
          <div>Error</div>
        </Route>
        <Route path="/" component={AppContainer} />
      </Switch>
    </div>
  );
}
