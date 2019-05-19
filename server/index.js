var Koa = require('koa')
var App = new Koa()
var json = require('koa-json')

App.use(json())
App.use(function (ctx) {
    console.log('本次访问的url', ctx.request.url)
    if (ctx.request.url === '/hello') {
        ctx.body = {text: 'hello, koa'}
    } else {
        ctx.body = 'koa home page'
    }
})

App.listen(9898, function () {
    console.log('the server is listening on 9898')
})