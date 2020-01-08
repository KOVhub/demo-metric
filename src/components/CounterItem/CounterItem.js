import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

import { ItemTypes } from '../../helpers';

class CounterItem extends Component  {
  
  // componentDidMount() {
  //   const { connectDragPreview } = this.props;

  //   const img = new Image();
  //   img.src = "https://image.flaticon.com/icons/png/512/763/763690.png";
  //   img.onload = () => connectDragPreview(img);
  // }

  render() {
    const { connectDragSource, isDragging, counter } = this.props;

    const opacity = isDragging ? 0 : 1;
  
    return connectDragSource(
      <li className='file-item' style={{opacity}}>
        <div className="file-item-container">
          <p className="file-item-container-name">
            <span className="file-item-name">{counter.nameCounter}</span>
          </p>
        </div>
      </li>,
      { dropEffect: 'copy' }
    )
  }

}

const counterItemSource = {
  beginDrag(props) {
    // Return the data describing the dragged item
    // все что тут вернем, получим в drop в DropTarget
    return {
      idCounter: props.counter.idCounter,
      indexCounter: props.indexCounter
    };
  },
  // endDrag(props, monitor) {
  //   if (!monitor.didDrop()) {
  //    // You can check whether the drop was successful or if the drag ended but nobody handled the drop
  //     return;
  //   }

  //    // When dropped on a compatible target, do something
  //    // Read the original dragged item from getItem()
  //   const item = monitor.getItem();

  //    // You may also read the drop result from the drop target that handled the drop, if it returned an object from its drop() method
  //   const dropResult = monitor.getDropResult();
  //    // This is a good place to call some Flux action
  //   props.CardActions.moveCardToList(item.id, dropResult.listId)
  // }
};

const collect = (connect, monitor) => {
  return {
    // Call this function inside render() to let React DnD handle the drag events
    connectDragSource: connect.dragSource(),
    // Returns a function that may be used inside the component to assign the drag preview role to a node
    connectDragPreview: connect.dragPreview(),
    // You can ask the monitor about the current drag state
    isDragging: monitor.isDragging()
  };
}

export default DragSource(ItemTypes.COUNTER, counterItemSource, collect)(CounterItem);