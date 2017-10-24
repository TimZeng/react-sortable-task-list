import React, { Component } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({itemIdex, value, onDelete}) => {
  return (
    <div className="light-text" style={styles.listItemStyle}>
      <span>
        <i className="fa fa-tasks" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {value}
      </span>
      <i
        onClick={() => onDelete(itemIdex)}
        style={{lineHeight: '30px'}}
        className="button fa fa-trash-o"
      />
    </div>
  );
});

const SortableList = SortableContainer(({items, onDelete}) => {

  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} itemIdex={index} value={value} onDelete={onDelete} />
      ))}
    </div>
  );
});

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

const styles = {
  listItemStyle: {
    backgroundColor: '#fff',
    padding: '10px',
    marginBottom: '15px',
    boxShadow: '0px 2px 9px -1px rgba(145,140,145,0.3)',
    borderRadius: '3px',
    // minHeight: '200px',
    display: 'flex',
    justifyContent: 'space-between'
  }
}