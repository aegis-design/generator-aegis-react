/**
 * Created by Zhengfeng.Yao on 16/10/10.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from '../utils';
import koaRouter from 'koa-router';

const initState = {
  home: {
    content: 'Hello world!'
  }
};

function getReducers(feature) {
  return require(`../${feature}/reducers/index`).default;
}

function render(feature, config) {
  return require(`./views/${feature}.est`)(config);
}

export default function init(server) {
  const router = koaRouter();
  router.get('/', async (ctx, next) => {
    console.log('xxxxxxxx');
    const reducers = getReducers('home');
    const store = createStore(reducers, initState);
    const App = require('../home/app').default;
    const markup = renderToString(
      <Provider store={store}>
        <div>
          <App />
        </div>
      </Provider>
    );
    ctx.type = 'html';
    ctx.body = render('home', Object.assign({markup, initState}, server.config));
    // next();
  });
  server.use(router.routes());
}
