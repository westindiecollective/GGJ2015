var React = require('react');
var Navigation = require('react-router').Navigation;

var GameOver = React.createClass({
  
  mixins: [Navigation],
  
  start: function(e) {
    e.preventDefault();
    this.transitionTo('home');
  },
  
  render: function() {
    var imgs = [];
    for(var i = 0 ; i < 20 ; i++) {
      var top = Math.round(Math.random() * 100 - 50);
      var left = Math.round(Math.random() * 150 - 25);
      imgs.push(
        <img src="explosions.gif" alt="Explosions" style={{position: 'absolute', height: '100%', top: top + '%', left: left + '%'}} />
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