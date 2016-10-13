import { createStore } from './utils';
import makeRootReducer from './reducers';

const store = createStore(makeRootReducer);

if (__DEV__) {
  module.hot.accept('./reducers', () => {
    const reducers = require('./reducers/index').default;
    store.replaceReducer(reducers);
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE);
      render();
    });
  });
}

export default store;
