import React, { Component } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({index, value, onDelete}) => (
  <div className="light-text sortable-list-item">
    <span>
      {value}
    </span>
    <i
      onClick={() => onDelete(index)}
      style={{lineHeight: '24px'}}
      className="button fa fa-trash-o"
    />
  </div>
));

const SortableList = SortableContainer(({items, onDelete}) => (
  <div>
    {items.map((value, index) => (
      <SortableItem
        key={`item-${index}`}
        index={index}
        value={value}
        onDelete={onDelete} />
    ))}
  </div>
));

export default class SortableListComponent extends Component {
  shouldCancelStart(e) {
    if (e.target.tagName.toLowerCase() === 'i') {
      return true;
    }
  }

  render() {
    return (
      <div className='sortable-list'>
        <SortableList
          items={this.props.items}
          onSortEnd={this.props.onSortEnd}
          onDelete={this.props.onDelete}
          shouldCancelStart={this.shouldCancelStart}
        />
      </div>
    );
  }
};
