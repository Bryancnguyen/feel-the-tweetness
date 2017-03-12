import { combineReducers } from 'redux';
import TweetReducer from './tweet_reducer';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';



const rootReducer = combineReducers({
  routing: routerReducer,
  tweet: TweetReducer});

export default rootReducer;
