import React from 'react';
import { findDOMNode } from "react-dom";
import { DropTarget } from 'react-dnd';
import update from 'immutability-helper';

import CounterItem from '../CounterItem';
import { ItemTypes } from '../../helpers';

import './counterList.css';

const CounterList = ({connectDropTarget, isOver, canDrop, moveCounter}) => {
  
  const counters = [{idCounter: '1111111', nameCounter: 'Сайт 1'}, {idCounter: '222222', nameCounter: 'Сайт 2'}, {idCounter: '33333333', nameCounter: 'Сайт 3'}, {idCounter: '4444444', nameCounter: 'Сайт 4'}];
  
  moveCounter = (dragIndex, hoverIndex) => {
    const { counters } = this.state;
    const dragCounter= counters[dragIndex];

    this.setState(
      update(this.state, {
        counters: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCounter]]
        }
      })
    );
  }

  let counterList = null;
  if (counters) {
    counterList = counters.map((counter, index) => {
      return <CounterItem
        key = {counter.idCounter}
        moveCounter = {moveCounter}
        counter = {counter}
        indexCounter = {index}
      />
    })
  }
  let classNames = 'fileList';
  if(isOver && canDrop) {
    classNames+=" green"
  }
  if(!isOver && canDrop) {
    classNames+=" yellow"
  }
  if(isOver && !canDrop) {
    classNames+=" red"
  }
  return connectDropTarget(
    <aside>
    {
      counters &&
      <ul className={classNames}>
        {counterList}
      </ul>
    }
    </aside>
  )
}


const CounterListTarget = {
  drop(props) {
    return props;
  },
  // canDrop(props) {
  //   // return props.sectionData.length <= 1;
  // },
  hover(props, monitor, component) {
    if (!component) {
      return null;
    }
    const dragIndex = monitor.getItem().indexCounter;
    const hoverIndex = props.indexCounter;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveCounter(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

const collect = (connect, monitor) => {
  return {
     // Call this function inside render() to let React DnD handle the drag events
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

export default DropTarget(ItemTypes.COUNTER, CounterListTarget, collect)(CounterList);