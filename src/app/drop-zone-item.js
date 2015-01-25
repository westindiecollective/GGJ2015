var React = require('react'),
    DragDropMixin = require('react-dnd').DragDropMixin;

var DropZoneItem = React.createClass({
  mixins: [DragDropMixin],
  
  configureDragDrop: function(registerType) {
    registerType('item', {
      dropTarget: {
        acceptDrop: this.props.onDrop
      }
    });
  },
  
  render: function() {
    var dropState = this.getDropState('item'),
        backgroundColor = '#222';
    
    if(dropState.isHovering) {
      backgroundColor = 'darkgreen';
    } else if (dropState.isDragging) {
      backgroundColor = 'darkkhaki';
    }
    
    return (
      <li {...this.dropTargetFor('item')} className="empty">
        <div style={{ background: backgroundColor }}>
          <span>Drop here</span>
        </div>
      </li>
    );
  }
});
module.exports = DropZoneItem;