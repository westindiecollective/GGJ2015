var React = require('react'),
    DragSourceItem = require('./drag-source-item'),
    DropZoneItem = require('./drop-zone-item');

var Scene = React.createClass({
  render: function () {
  
    var items = this.props.items.map(function (item) {
      return <DragSourceItem key={item} name={item}></DragSourceItem>;
    });

    var droppedItems = this.props.droppedItems.map(function (item) {
      return (
        <li key={item}>
          <div>{item}</div>
        </li>
      );
    });
  
    return (
      <section id='room'>
        <div className='container'>
                  
          <ul className='item-list'>
            {items}
          </ul>
          
          <div className='drop-zone'>
            <ul className="item-list">
              {droppedItems}
              <DropZoneItem onDrop={this.props.onDropItem}></DropZoneItem>
            </ul>
          </div>

          <button onClick={this.props.onTestCombination}>Do it!</button>
        </div>
      </section>
    );
  }
});

module.exports = Scene;