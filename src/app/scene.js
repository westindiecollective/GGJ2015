var React = require('react'),
    DragSourceItem = require('./drag-source-item'),
    DropZoneItem = require('./drop-zone-item');

var Scene = React.createClass({
  render: function () {
  
    var items = this.props.items.map(function (item) {
      return <li key={item}><a><img alt={item} /></a></li>;
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
          
          <DragSourceItem></DragSourceItem>
          
          <DropZoneItem></DropZoneItem>
          
          <div className='drop-zone'>
            <ul className="item-list">
              <li><a href=""><img alt="Ham"/></a></li>
              <li><a href=""><img alt="BBQ"/></a></li>
              <li className="empty"><a href=""><span>Drop here</span></a></li>
              <li><a href="">{this.props.result}</a></li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = Scene;