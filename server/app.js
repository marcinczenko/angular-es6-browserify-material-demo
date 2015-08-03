require('babel/register');

var koa = require('koa');
var route = require('koa-route');
var serve = require('koa-static');
var mount = require('koa-mount');
var send = require('koa-send');

var app = koa();

app.use(mount('/public', serve('./dist')));

app.use(route.get('/', function *() {
    yield send(this, __dirname + '/baseTemplate.html');
}));

app.listen(process.env.PORT || 3000);
