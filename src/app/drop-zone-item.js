var React = require('react'),
    DragDropMixin = require('react-dnd').DragDropMixin;

var DropZoneItem = React.createClass({
  mixins: [DragDropMixin],
  
  configureDragDrop: function(registerType) {
   return registerType('item', {
     dragSource: {
       beginDrag: function() {
         console.log('Drag');
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
    var isDragging = this.getDragState('item');
    
    return <img alt="Drop zone test" style={{opacity: isDragging ? 0.2 : 1}} />
  }
});

module.exports = DropZoneItem;