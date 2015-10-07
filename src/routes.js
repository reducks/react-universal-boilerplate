import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  App,
  Home,
  NotFound,
} from './containers';

export default () => (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} />
  </Route>
);
