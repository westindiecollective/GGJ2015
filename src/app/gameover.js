var React = require('react');
var Navigation = require('react-router').Navigation;

var Buzz = require('node-buzz');

var GameOver = React.createClass({
  
  mixins: [Navigation],
  
  start: function(e) {
    e.preventDefault();
    this.transitionTo('home');
  },
  
  getInitialState: function() {
    return {
      explosion1: new Buzz.sound("sounds/explosion1", {formats: [ "mp3", "wav" ]}),
      explosion2: new Buzz.sound("sounds/explosion2", {formats: [ "mp3", "wav" ]}),
    };
  },
  
  playExplosion: function() {
    this.state.explosion2.play();
    this.state.explosion1.play();
  },
  
  render: function() {
    var imgs = [];
    for(var i = 0 ; i < 20 ; i++) {
      var top = Math.round(Math.random() * 100 - 50);
      var left = Math.round(Math.random() * 150 - 25);
      imgs.push(
        <img src="explosions.gif" alt="Explosions" style={{position: 'absolute', height: '100%', top: top + '%', left: left + '%'}} onLoad={this.playExplosion()}/>
      );
    }
    
    return(
      <section className='failure'>
        { imgs }
        <div className='gameover-container'>
          <h1 className='gameover-title'>Game Over</h1>
          <button className='button' onClick={this.start}>Try Again</button>
        </div>
      </section>
    );
  }
  
});

module.exports = GameOver;