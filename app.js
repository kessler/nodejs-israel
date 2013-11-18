
/**
 * Module dependencies.
 */
var config = require('./config');
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.engine('html', require('hogan-express'));
app.enable('view cache');

app.set('port', config.innerPort);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('nodejs-israel-form'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/content', routes.content);
app.post('/register', routes.register);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
