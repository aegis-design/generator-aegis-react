import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import home from './home';

export default combineReducers({
  home,
  routing: routerReducer
});
