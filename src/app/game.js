var React = require('react');
var Navigation = require('react-router').Navigation;

var utils = require('./utils');

var Story = require('./story');
var Scene = require('./scene');

//var data = {
//  items: ['banana', 'paper clip', 'umbrella', 'coca bottle', 'sword', 'stick', 'TARDIS'],
//  scenes: ''
//};

var data = require('./data.json');

var Game = React.createClass({

  mixins: [Navigation],

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

    if (successes.length > 0) {       
      this.setState({
        success: successes.length > 0,
        result: this.state.challenge.combinations[0].result
      });
    } else {
      this.transitionTo('failure');
    }
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

module.exports = Game;