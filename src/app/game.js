var React = require('react');

var utils = require('./utils');

var Story = require('./story');
var Scene = require('./scene');

//var data = {
//  items: ['banana', 'paper clip', 'umbrella', 'coca bottle', 'sword', 'stick', 'TARDIS'],
//  scenes: ''
//};

var data = require('./data.json');

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

module.exports = Game;