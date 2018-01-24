// @flow

import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import HomeScreen from 'screens/Home';
import UserScreen from 'screens/User';
import DefaultLayout from 'screens/Default';

import 'styles/general.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <DefaultLayout exact={true} path="/search" component={HomeScreen} />
        <DefaultLayout exact={true} path="/:username" component={UserScreen} />
        <Redirect to="/search" />
      </Switch>
    </Router>
  );
}
