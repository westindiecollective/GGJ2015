var React = require('react');
var Router = require('react-router');
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
    Link = Router.Link, RouteHandler = Router.RouteHandler;

var utils = require('./utils');

var Story = require('./story');
var Scene = require('./scene');

var Buzz = require('node-buzz');

var data = {
  items: ['banana', 'paper clip', 'umbrella', 'coca bottle', 'sword', 'stick', 'TARDIS'],
  scenes: ''
};

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

var Home = React.createClass({
  
  render: function() {
    return (
      <section className='home'>
        <h1><abbr title="Do It Yourself">DIY</abbr> Academy</h1>
        <p>
          Come and learn the best pratices to solve every problem in less time than a time bomb have to explode.
        </p>
        <input type="text" placeholder="Username" />
        <Link to="game" className='button'>Game</Link>

        <h2>Why join ?</h2>
        <ul>
          <li>
            <div className='container'>
              <img src="macgyver.jpg" />
              Never be surprised when faced to a problematic situation.
            </div>
          </li>
          <li>
            <div className='container'>
              <img src="macgyver.jpg" />
              Learn how to be good-looking in every situation
            </div>
          </li>
          <li>
            <div className='container'>
              <img src="macgyver.jpg" />
              Get graduated and receive a real diploma even if you're dumb !
            </div>
          </li>
        </ul>
      </section>
    );
  }
  
});

var Game = React.createClass({

  getInitialState: function () {
    return {
      counter: 1,
      items: utils.shuffle(data.items),
      scene: "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man."
    };
  },
  
  nextChallenge: function () {
    this.setState({
      counter: this.state.counter + 1,
      items: utils.shuffle(data.items)
    });
  },

  render: function () {
    return (
      <div id='root'>
        <Story content={this.state.scene} onNext={this.nextChallenge} counter={this.state.counter}></Story>
        <Scene items={this.state.items} result='Cooked ham'></Scene>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" handler={Home}/>
    <Route name="game" handler={Game}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});