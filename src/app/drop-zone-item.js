var React = require('react'),
    DragDropMixin = require('react-dnd').DragDropMixin;

var DropZoneItem = React.createClass({
  mixins: [DragDropMixin],
  
  configureDragDrop(registerType) {
    registerType('item', {
      dropTarget: {
        acceptDrop(item) {
          console.log('You dropped an item !');
        }
      }
    });
  },
  
  render() {
    var dropState = this.getDropState('item'),
        backgroundColor = '#222';
    
    if(dropState.isHovering) {
      backgroundColor = 'darkgreen';
    } else if (dropState.isDragging) {
      backgroundColor = 'darkkhaki';
    }
    
    return <img alt="Drop zone test" style={{background: backgroundColor}} />;
  }
});
module.exports = DropZoneItem;