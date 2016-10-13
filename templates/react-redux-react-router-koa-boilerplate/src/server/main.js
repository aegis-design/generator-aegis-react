/**
 * Created by Zhengfeng.Yao on 16/10/10.
 */
 import path from 'path';
 import Koa from 'koa';
 import assets from './assets';
 import ssr from './ssr';
 import favicon from 'koa-favicon';
 import cookie from 'koa-cookie';
 import bodyParser from 'koa-bodyparser';
 import json from 'koa-json';
 import logger from 'koa-logger';
 import Serve from 'koa-static';
 import convert from 'koa-convert';
 import mount from 'koa-mount';

 global.navigator = global.navigator || {};
 global.navigator.userAgent = global.navigator.userAgent || 'all';

 const config = {
   assets,
   host: 'localhost',
   port: 3000,
   public: 'http://localhost:3000'
 };

 const server = new Koa();
 server.config = config;
 server.use(favicon('build/public/favicon.ico'));
 server.use(convert(cookie()));
 server.use(bodyParser());
 server.use(convert(logger()));
 server.use(mount('/', convert(Serve(path.join(__dirname, 'public')))));
 ssr(server);

 server.on('error', (err, ctx) => {
     logger.error('server error', err, ctx);
 });

 server.listen(config.port, () => {
   console.log(`The server is running at http://${config.host}:${config.port}/`);
 });
