const Koa = require('koa')
const App = new Koa()
const json = require('koa-json')
App.use(json())
App.use(ctx => {
  const url = ctx.request.url
  console.log(typeof url)
  if (url === '/weather') {
    ctx.body = {temperature: 35, himidity: 80}
  } else {
    ctx.body = 'hello, home'
  }
  
})
App.listen('5566', function (){
  console.log('server起在5566')
})