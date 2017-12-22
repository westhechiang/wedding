import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from './coreui/Container';

import Slack from './Slack';

import App from '../app/container';
import CompsApp from '../compsApp/container';
import Login from '../login/container';

const AppWrapper = () => (
  <Container>
    <Slack />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/compsapp" component={CompsApp} />
      <Route path="/:id/" component={App} />
      <Route path="/" component={App} />
    </Switch>
  </Container>
);

export default AppWrapper;
