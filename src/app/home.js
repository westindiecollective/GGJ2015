var React = require('react');
var Link = require('react-router').Link;
var Navigation = require('react-router').Navigation;

var Buzz = require('node-buzz');

var Home = React.createClass({
  
  mixins: [Navigation],

  start: function (e) {
    e.preventDefault();
    window.username = this.refs.usernameInput.getDOMNode().value;
    this.state.explosion1.play();
    this.state.opening.stop();
    localStorage.setItem('username', this.refs.usernameInput.getDOMNode().value);
    this.transitionTo('game');
  },
  
  getInitialState: function() {
    return {
      explosion1: new Buzz.sound("sounds/explosion1", {formats: [ "mp3", "wav" ]}),
      opening: new Buzz.sound("sounds/opening", {formats: [ "mp3", "wav" ]}),
    };
  },
  
  playMusic: function() {
    this.state.opening.play();
  },
  
  render: function() {
    return (
      <section className='home' onLoad={this.playMusic}>
        <h1><abbr title='Do It Yourself'>DIY</abbr> Academy</h1>
        <p>Come and learn the best pratices to solve every problem in less time than a time bomb have to explode.</p>
        
        <form onSubmit={this.start}>
          <input type='text' placeholder='Username' ref='usernameInput' />
          <input type='submit' className='button' value='Play' />
        </form>

        <h2>Why join ?</h2>
        <ul>
          <li>
            <div className='container'>
              <img src='macgyver.jpg' />
              Never be surprised when faced to a problematic situation.
            </div>
          </li>
          <li>
            <div className='container'>
              <img src='macgyver.jpg' />
              Learn how to be good-looking in every situation
            </div>
          </li>
          <li>
            <div className='container'>
              <img src='macgyver.jpg' />
              Get graduated and receive a real diploma even if you're dumb !
            </div>
          </li>
        </ul>
      </section>
    );
  }
  
});

module.exports = Home;