var React = require('react'),
    DragDropMixin = require('react-dnd').DragDropMixin;

var DragSourceItem = React.createClass({
  mixins: [DragDropMixin],
  
  configureDragDrop: function(registerType) {
    return registerType('item', {
      dragSource: {
        beginDrag: function() {
          return {
            item: {
              name: this.props.name
            }
          };
        }
      }
    });
  },
  
  render: function () {
    var isDragging = this.getDragState('item').isDragging;
    
    return (
      <li {...this.dragSourceFor('item')} style={{ opacity: isDragging ? 0.2 : 1 }}>
        <div>
          {this.props.name}
        </div>
      </li>
    );
  }
});

module.exports = DragSourceItem;