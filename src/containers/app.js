import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SortableListComponent from '../components/sortableList';
import { Button, InputGroup } from '../components/reusableComponents';
import { fetchTasks } from '../actions/index';

class App extends Component {
  renderButtons() {
    return (
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
    )
  }

  renderInputGroup() {
    return (
      <InputGroup
        actionText='Add'
        onClick={() => console.log('adding task')}
        disabled={false}
      />
    )
  }

  renderSortableList() {
    return (
      <SortableListComponent />
    )
  }

  render() {
    return (
      <div>
        <header>
          <h5>Sortable Task List - Tim Zeng - ReactJS & Redux</h5>
        </header>

        <div className='container content'>
          { this.renderButtons() }
          { this.renderInputGroup() }
          { this.renderSortableList() }
        </div>
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
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchTasks }, dispatch);

export default connect(null, mapDispatchToProps)(App);
