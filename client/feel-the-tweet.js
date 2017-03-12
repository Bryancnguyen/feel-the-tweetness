import React from 'react';

import { render } from 'react-dom';

// Import css
require("./styles/style.css");
require("materialize-loader");
require("./ionicons.min.css");

// Import Components
import App from './components/App';
import Tweet from './components/Tweet';
import Search from './components/Search';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Search}></IndexRoute>
        <Route path="/feeltweet" component={Tweet}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
