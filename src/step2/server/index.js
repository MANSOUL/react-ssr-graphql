import Koa from 'koa';
import koaStatic from 'koa-static';
import koaBody from 'koa-body';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Router from 'koa-router';
import App from '../share/App';
import { StaticRouter } from 'react-router-dom';

const app = new Koa();
const router = new Router();

router.get('*', async (ctx, next) => {
  const css = new Set();
  const cssContext = {
    insertCss(...styles) {
      styles.forEach(style => css.add(style._getCss()))
    }
  }
  const markup = renderToString(
    <StaticRouter location={ctx.request.url} context={{}}>
      <App cssContext={cssContext}/>
    </StaticRouter>
  )
  const cssText = [...css].join('');
  ctx.type = 'html';
  ctx.body = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>React 服务端渲染</title>
    <meta charset="utf-8">
    <style>${cssText}</style>
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