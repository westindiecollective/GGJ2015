var React = require('react');
var Router = require('react-router');
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
    Link = Router.Link, RouteHandler = Router.RouteHandler;
var Navigation = require('react-router').Navigation;

var utils = require('./utils');

var Story = require('./story');
var Scene = require('./scene');

var Buzz = require('node-buzz');

//var data = {
//  items: ['banana', 'paper clip', 'umbrella', 'coca bottle', 'sword', 'stick', 'TARDIS'],
//  scenes: ''
//};

var data = require('./data.json');

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

    var challenge = data.challenge[0];
    
    var items = utils.sample(data.items, 8)
      .concat(challenge.combinations[0].items)
      .reduce(function(accum, current) {
          if (accum.indexOf(current) < 0) {
            accum.push(current);
          }
          return accum;
        }, []);
    
    return {
      counter: 1,
      challenge: challenge,
      items: items,
      droppedItems: [],
      success: false,
      scene: [
        utils.sample(data.heading, 1),
        utils.sample(data.location, 1),
        "and",
        challenge.description        
      ].join(' '),
      result: ''
    };
  },
  
  nextChallenge: function () {

    var challenge = data.challenge[this.state.counter];

    var items = utils.sample(data.items, 8)
      .concat(challenge.combinations[0].items)
      .reduce(function(accum, current) {
          if (accum.indexOf(current) < 0) {
            accum.push(current);
          }
          return accum;
        }, []);
    
    this.setState({
      counter: this.state.counter + 1,
      challenge: challenge,
      items: items,
      droppedItems: [],
      success: false,
      scene: [
        utils.sample(data.heading, 1),
        utils.sample(data.location, 1),
        "and",
        challenge.description        
      ].join(' '),
      result: ''
    });
  },
  
  droppedItem: function (item) {
    this.setState({
      items: this.state.items.filter(function (i) {
        return i != item.name;
      }),
      droppedItems: this.state.droppedItems.concat(item.name)
    });
  },
  
  testCombination: function () {
    
    var droppedItems = this.state.droppedItems;
    
    var successes = this.state.challenge.combinations.filter(function (comb) {
      return droppedItems.every(function (item) {
        return comb.items.indexOf(item) != -1;
      });
    });
        
    this.setState({
      success: successes.length > 0,
      result: this.state.challenge.combinations[0].result
    });
  },

  render: function () {
    return (
      <div id='root'>
        <Story
          content={this.state.scene}
          onNext={this.nextChallenge}
          counter={this.state.counter}
          success={this.state.success}
          result={this.state.result}></Story>
        <Scene
          items={this.state.items}
          droppedItems={this.state.droppedItems}
          result='&nbsp;'
          onDropItem={this.droppedItem}
          onTestCombination={this.testCombination}></Scene>
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