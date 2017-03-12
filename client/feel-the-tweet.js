import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';


import { render } from 'react-dom';

// Import css
require("./styles/style.css");
require("materialize-loader");
require("./ionicons.min.css");

// Import Components
import App from './components/App';
import reducers from './reducers';
import Tweet from './components/Tweet';
import SearchBar from './containers/search-bar';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.root'));
// const router = (
//   <Provider store={store}>
//     <Router history={history}>
//       <Route path="/" component={App}>
//         <IndexRoute component={Search}></IndexRoute>
//         <Route path="/feeltweet" component={Tweet}></Route>
//       </Route>
//     </Router>
//   </Provider>
// )

// render(router, document.getElementById('root'));
