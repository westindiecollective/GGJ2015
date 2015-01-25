var React = require('react');
var Link = require('react-router').Link;
var Navigation = require('react-router').Navigation;

var Home = React.createClass({
  
  mixins: [Navigation],

  start: function (e) {
    e.preventDefault();
    localStorage.setItem('username', this.refs.usernameInput.getDOMNode().value);
    this.transitionTo('game');
  },
  
  render: function() {
    return (
      <section className='home'>
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