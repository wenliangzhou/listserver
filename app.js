const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  const { url, method, headers } = ctx;
  console.log(url, method);
  if (rul === '/') {
    
  }
  ctx.body = 'Hello World'
});

app.listen(4000);

console.log('http://localhost:4000/');