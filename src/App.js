import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { AppContainer, NotFound } from './components';

export function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/not-found" component={NotFound} />
        <Route path="/" component={AppContainer} />
      </Switch>
    </div>
  );
}
