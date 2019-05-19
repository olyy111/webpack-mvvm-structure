var Koa = require('koa')
var App = new Koa()


App.use(function (ctx) {
    console.log(ctx)
    if (ctx.request.url === '/hello') {
        ctx.body = 'hello, koa'
    } else {
        ctx.body = 'koa home page'
    }
})

App.listen(9898, function () {
    console.log('the server is listening on 9898')
})