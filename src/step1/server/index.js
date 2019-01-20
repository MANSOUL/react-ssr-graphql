import Koa from 'koa';
import koaStatic from 'koa-static';
import koaBody from 'koa-body';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Router from 'koa-router';
import App from '../share/App';

const app = new Koa();
const router = new Router();

router.get('*', async (ctx, next) => {
  const markup = renderToString(<App />)
  ctx.type = 'html';
  ctx.body = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>React 服务端渲染</title>
    <meta charset="utf-8">
  </head>
  <body>
    <div id="app">${markup}</div>
    <script src="/bundle.js"></script>
  </body>
  </html>
  `;
});

app.use(koaBody({
  multipart: true
}));

// 将public设置为静态资源文件目录
app.use(koaStatic('public', {}));

app.use(router.routes());

app.listen(3000);