import React, { Component } from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

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
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  render() {
    return (
      <div className='sortable-list'>

        <div style={styles.headerStyle}>
          <span style={styles.titleStyle}>Tasks</span>
          <div style={styles.buttonsStyle}>
            <span style={{...styles.buttonStyle, backgroundColor:'#8d9db0'}}>Add Task</span>
            <span style={{...styles.buttonStyle, backgroundColor:'#78da9f'}}>Save</span>
          </div>
        </div>

        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
      </div>
    );
  }
};

const styles = {
  headerStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px'
  },

  titleStyle: {
    fontSize: '200%',
    lineHeight: '46px'
  },

  buttonsStyle: {
    display: 'inline-block'
  },

  buttonStyle: {
    marginLeft:'8px',
    display:'inline-block',
    padding: '8px 15px',
    borderRadius: '5px',
    color: '#fff'
  },

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