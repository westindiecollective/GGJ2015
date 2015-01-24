var React = require('react');

var Scene = React.createClass({
  render: function () {
  
    var items = this.props.items.map(function (item, index) {
      return <li key={index}><img alt={item} /></li>;
    });
  
    return (
      <section id='room'>
        <div className='container'>
        
          <h2>Room</h2>
          <img alt='room picture' />
          
          <h2>Items</h2>
          <ul className='item-list'>
            {items}
          </ul>
          
          <div className='drop-zone'>
            <p>drop items here to craft</p>
          </div>
    
          <div className='result'>
            <p>{this.props.result}</p>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = Scene;