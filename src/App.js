import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {
  AppMovie, Modal,
} from './components';

export function App() {
  return (
    <div className="App">
      <Switch>
        <AppMovie>
          <Route path="id">
            <Modal />
          </Route>
        </AppMovie>
      </Switch>
    </div>
  );
}
