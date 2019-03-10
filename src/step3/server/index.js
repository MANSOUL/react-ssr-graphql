import Koa from 'koa';
import koaStatic from 'koa-static';
import koaBody from 'koa-body';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Router from 'koa-router';
import App from '../share/App';
import { StaticRouter } from 'react-router-dom';
import routesConfig from '../share/routes';
import Todo from './model/todo';

const app = new Koa();
const router = new Router();
const todo = new Todo();

// 因为接下来需要创建别的路由，所以不再使用*通配符
routesConfig.forEach((r) => {
  router.get(r.path, async (ctx, next) => {
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
});

// 获取TODO列表
router.get('/todo/list', ctx => {
  ctx.body = todo.list();
});

// 创建新的TODO
router.post('/todo/create', ctx => {
  const { content } = ctx.request.body;
  try {
    todo.create(content);
    ctx.body = {
      success: true
    };
  }
  catch(err) {
    ctx.body = {
      success: false
    };
  }
});

// 完成TODO
router.post('/todo/done/:id', ctx => {
  const { id } = ctx.request.body;
  try {
    todo.done(id);
    ctx.body = {
      success: true
    };
  }
  catch(err) {
    ctx.body = {
      success: false
    };
  }
});

// 删除TODO
router.post('/todo/delete/:id', ctx => {
  const { id } = ctx.request.body;
  try {
    todo.delete(id);
    ctx.body = {
      success: true
    };
  }
  catch(err) {
    ctx.body = {
      success: false
    };
  }
});

app.use(koaBody({
  multipart: true
}));

// 将public设置为静态资源文件目录
app.use(koaStatic('public', {}));

app.use(router.routes());

app.listen(3000);