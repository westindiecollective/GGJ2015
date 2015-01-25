var React = require('react');
var Router = require('react-router');
<<<<<<< HEAD
var Route = Router.Route, 
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler;
=======
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
    Link = Router.Link, RouteHandler = Router.RouteHandler;
var Navigation = require('react-router').Navigation;
>>>>>>> 19790faff7aa8784cc0c00a45dd84ad0f57d8f3c

var Home = require('./home');
var Game = require('./game');
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

<<<<<<< HEAD
=======
var Home = React.createClass({

  mixins: [Navigation],
  
  start: function (e) {
    e.preventDefault();
    this.transitionTo('game');
  },
  
  render: function() {
    return (
      <section className='home'>
        <h1><abbr title="Do It Yourself">DIY</abbr> Academy</h1>
        <p>
          Come and learn the best pratices to solve every problem in less time than a time bomb have to explode.
        </p>
        
        <form onSubmit={this.start}>
          <input type="text" placeholder="Username" />
          <input type='submit' className='button'  value='Play' />
        </form>

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
      items: utils.sample(data.items, 8),
      droppedItems: [],
      success: false,
      scene: "Lorem"
    };
  },
  
  nextChallenge: function () {
    this.setState({
      counter: this.state.counter + 1,
      items: utils.shuffle(data.items)
    });
  },
  
  droppedItem: function (item) {
    this.setState({
      items: this.state.items.filter(function (i) {
        return i != item.name;
      }),
      droppedItems: this.state.droppedItems.concat(item.name),
      success: true
    });
  },

  render: function () {
    return (
      <div id='root'>
        <Story
          content={this.state.scene}
          onNext={this.nextChallenge}
          counter={this.state.counter}
          success={this.state.success}></Story>
        <Scene
          items={this.state.items}
          droppedItems={this.state.droppedItems}
          result='&nbsp;'
          onDropItem={this.droppedItem}></Scene>
      </div>
    );
  }
});

>>>>>>> 19790faff7aa8784cc0c00a45dd84ad0f57d8f3c
var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" handler={Home}/>
    <Route name="game" handler={Game}/>
    <Route name="success" handler={End}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});