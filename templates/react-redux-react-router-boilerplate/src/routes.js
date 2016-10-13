/**
 * Created by Zhengfeng.Yao on 16/10/2.
 */
import App from './app';
import { Home } from './features';
const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: Home
  }
};

export default routes;
