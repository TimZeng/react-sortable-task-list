import React, { Component } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) =>
  <div className="light-text" style={styles.listItemStyle}>
    <span>
      <i className="fa fa-tasks" />
      &nbsp;&nbsp;&nbsp;&nbsp;
      {value}
    </span>
    <i style={{lineHeight: '30px'}} className="fa fa-trash-o" />
  </div>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

export default class SortableListComponent extends Component {
  // onSortEnd = ({oldIndex, newIndex}) => {
  //   this.setState({
  //     items: arrayMove(this.state.items, oldIndex, newIndex),
  //   });
  // };

  render() {
    return (
      <div className='sortable-list'>
        <SortableList items={this.props.items} onSortEnd={this.props.onSortEnd} />
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