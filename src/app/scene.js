var React = require('react'),
    DragSourceItem = require('./drag-source-item'),
    DropZoneItem = require('./drop-zone-item');

var Scene = React.createClass({
  getFilename: function(name) {
    return 'items/' + name.toLowerCase().replace(/\s+/g, '') + '.png';
  },

  render: function () {
  
    var items = this.props.items.map(function (item) {
      return <DragSourceItem key={item} name={item}></DragSourceItem>;
    });

    var droppedItems = this.props.droppedItems.map(function (item) {
      return (
        <li key={item}>
          <img src={this.getFilename(item)} alt={item} />
        </li>
      );
    });
    
    if (droppedItems.length < 2) {
      var dropzone = <DropZoneItem onDrop={this.props.onDropItem}></DropZoneItem>
    }
  
    return (
      <section id='room'>
        <div className='container'>
                  
          <ul className='item-list'>
            {items}
          </ul>
          
          <div className='drop-zone'>
            <ul className="item-list">
              {droppedItems}
              {dropzone}
            </ul>
          </div>

          <button className='button' onClick={this.props.onTestCombination}>Do it!</button>
        </div>
      </section>
    );
  }
});

module.exports = Scene;