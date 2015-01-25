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
  
  getFilename: function(name) {
    return 'items/' + name.toLowerCase().replace(/\s+/g, '') + '.png';
  },
  
  render: function () {
    var isDragging = this.getDragState('item').isDragging;
    
    return (
      <li {...this.dragSourceFor('item')} style={{ opacity: isDragging ? 0.2 : 1 }}>
        <img src={this.getFilename(this.props.name)} alt={this.props.name} />
        {this.props.name}
      </li>
    );
  }
});

module.exports = DragSourceItem;