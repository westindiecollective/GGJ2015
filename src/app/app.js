var React = require('react');
var Router = require('react-router');
var Route = Router.Route, DefaultRoute = Router.DefaultRoute;

var utils = require('./utils');

var Story = require('./story');
var Scene = require('./scene');

var data = {
  items: ['banana', 'paper clip', 'umbrella', 'coca bottle', 'sword', 'stick', 'TARDIS'],
  scenes: ''
};

var App = React.createClass({

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
  <Route name="app" path="/" handler={App}></Route>
);

// <Route name="inbox" handler={Inbox}/>
// <Route name="calendar" handler={Calendar}/>
// <DefaultRoute handler={Dashboard}/>

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});