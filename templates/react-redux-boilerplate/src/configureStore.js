import { createStore } from './utils';
import reducers from './reducers';

const store = createStore(reducers);

export default store;
