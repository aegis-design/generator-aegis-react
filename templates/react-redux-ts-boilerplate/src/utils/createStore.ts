/**
 * Created by Zhengfeng.Yao on 16/10/9.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import DevTools from './devtools';

const logger = createLogger();
const middleware = [thunk, logger];
let store;
if (process.env.NODE_ENV === 'production')

store = applyMiddleware(...middleware)(createStore);

export default store;
