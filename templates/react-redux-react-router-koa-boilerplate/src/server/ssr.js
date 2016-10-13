/**
 * Created by Zhengfeng.Yao on 16/10/10.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import { createStore, DevTools } from '../utils';
import reducers from '../reducers';
import routes from '../routes';
import koaRouter from 'koa-router';

const initState = {
  home: {
    content: 'Hello world!'
  }
};

const store = createStore(reducers, initState);

function render(config) {
  return require(`./views/index.est`)(config);
}

export default function init(server) {
  const router = koaRouter();
  router.get('*', async (ctx, next) => {
    match({ routes, location: ctx.url }, (err, redirectLocation, props) => {
      if (err) {
        ctx.status = 500;
        ctx.message = err.message;
      } else if (redirectLocation) {
        ctx.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (props) {
        const markup = renderToString(
          <Provider store={store}>
            <div>
              <RouterContext { ...props } />
              {
                __DEV__ && DevTools
              }
            </div>
          </Provider>
        );
        ctx.type = 'html';
        ctx.body = render(Object.assign({markup, initState}, server.config));
      } else {
        ctx.status = 400;
      }
    });
  });
  server.use(router.routes());
}
