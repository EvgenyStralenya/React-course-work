import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppContainer, NotFound } from './components';

export function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/React-course-work/not-found" component={NotFound} />
        <Route path="/React-course-work" component={AppContainer} />
      </Switch>
    </div>
  );
}
