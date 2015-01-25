var React = require('react');
var Router = require('react-router');
var Route = Router.Route, 
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler;

var Home = require('./home');
var Game = require('./game');
var GameOver = require('./gameover');
var End = require('./end');

var Buzz = require('node-buzz');

/*var mySound = new Buzz.sound("test", {
    formats: [ "mp3" ]
});

mySound.play();*/

var App = React.createClass({
  render: function() {
    return (
      <RouteHandler/>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" handler={Home}/>
    <Route name="game" handler={Game}/>
    <Route name="success" handler={End}/>
    <Route name="failure" handler={GameOver}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});