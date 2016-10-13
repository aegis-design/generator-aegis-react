/**
 * Created by Zhengfeng.Yao on 16/10/10.
 */
import path from 'path';
import Express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import assets from './assets';
import ssr from './ssr';

global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

const config = {
  assets,
  host: 'localhost',
  port: 3000,
  public: 'http://localhost:3000'
};

const server = new Express();
server.use(Express.static(path.join(__dirname, 'public')));
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(favicon('build/public/favicon.ico'));
server.config = config;
ssr(server);

server.listen(config.port, () => {
  console.log(`The server is running at http://${config.host}:${config.port}/`);
});
