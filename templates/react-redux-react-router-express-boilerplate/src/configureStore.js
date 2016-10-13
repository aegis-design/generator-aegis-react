import { createStore } from './utils';
import defaultReducers from './reducers';

const store = createStore(defaultReducers, window.__INIT_STATE__);
if (__DEV__) {
  module.hot.accept('./reducers', () => {
    const reducers = require('./reducers/index').default;
    store.replaceReducer(reducers);
  });
}

export default store;
