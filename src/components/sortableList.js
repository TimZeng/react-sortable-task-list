import React, { Component } from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

import { Button, InputGroup } from './reusableComponents';

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
          <div>
            <Button
              text='Add Task'
              divStyle={{backgroundColor:'#8d9db0',color:'#fff'}}
              onClick={() => console.log('trying to add task')}
            />
            <Button
              text='Save'
              divStyle={{backgroundColor:'#78da9f',color:'#fff', marginLeft:'8px'}}
              onClick={() => console.log('trying to save tasks')}
            />
          </div>
        </div>

        <InputGroup
          actionText='Add'
          onClick={() => console.log('adding task')}
          disabled={false}/>

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