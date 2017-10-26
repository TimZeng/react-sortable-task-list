import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { arrayMove } from 'react-sortable-hoc';

import SortableListComponent from '../components/sortableList';
import { Button, InputGroup, Alert } from '../components/reusableComponents';
import {
  fetchTasks,
  updateTasks,
  uploadTasks,
  addNewTask,
  updateNewTask,
  updateGlobal,
  resetAlert
} from '../actions/index';

class App extends Component {
  componentWillMount() {
    this.props.fetchTasks();
  }

  renderAlert() {
    const { alert, resetAlert } = this.props;
    return (
      <Alert
        alert={ alert }
        onClose={ resetAlert }
      />
    )
  }

  renderButtons() {
    const { global, updateGlobal } = this.props;
    const { changeMade, taskFetched } = this.props.global;
    return (
      <div style={styles.headerStyle}>
        <span style={styles.titleStyle}>Tasks</span>
        <div>
          <Button
            text='Add Task'
            divStyle={{backgroundColor:'#8d9db0',color:'#fff',fontSize:'75%'}}
            onClick={this.addNewTask}
          />
          <Button
            text='Save'
            divStyle={{backgroundColor:'#78da9f',color:'#fff',fontSize:'75%',marginLeft:'8px'}}
            disabled={!changeMade || !taskFetched}
            onClick={this.saveTasks}
          />
        </div>
      </div>
    )
  }

  addNewTask = () => {
    const { newTask, tasks } = this.props;
    if ( newTask === '' ) {
      return;
    } else if ( !!newTask ) {
      this.processNewTask(true);
    }

    this.props.addNewTask();
  }

  updateNewTask = val => {
    this.props.updateNewTask(val);
  }

  handleKeyPress = event => {
    if ( event.key === 'Enter' ) {
      this.processNewTask(false);
    }
  }

  processNewTask = isAdding => {
    const { newTask, tasks, updateTasks, updateNewTask } = this.props;
    if ( !newTask ) return;

    tasks.unshift(newTask);
    updateTasks(tasks.slice());

    const task = !!isAdding ? '' : null;
    updateNewTask(task);
  }

  removeTask = index => {
    const { tasks } = this.props;
    tasks.splice(index, 1);
    this.props.updateTasks(tasks.slice());
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    const tasks = arrayMove(this.props.tasks, oldIndex, newIndex);
    this.props.updateTasks(tasks);
  }

  saveTasks = () => {
    const { newTask, tasks } = this.props;
    const { uploadTasks } = this.props;

    if ( !!newTask ) {
      tasks.unshift(newTask);
    }

    uploadTasks(tasks);
  }

  renderInputGroup() {
    const { newTask } = this.props;
    if ( newTask === null ) {
      return null;
    }

    return (
      <div className="light-text sortable-list-item">
        <input
          style={styles.inputStyle}
          value={newTask||''}
          onChange={e => this.updateNewTask(e.target.value)}
          onKeyPress={this.handleKeyPress}
          placeholder='New task'
          autoFocus
        />
        <i
          onClick={() => this.updateNewTask(null)}
          style={{lineHeight: '24px'}}
          className="button fa fa-trash-o"
        />
      </div>
    )
  }

  renderSortableList(tasks) {
    return (
      <SortableListComponent
        items={tasks}
        onSortEnd={this.onSortEnd}
        onDelete={this.removeTask}
      />
    )
  }

  render() {
    const { tasks } = this.props;
    return (
      <div>
        <header>
          <h5>Sortable Task List</h5>
        </header>

        <div className='container'>
          { this.renderAlert() }
          <div className='content'>
            { this.renderButtons() }
            { this.renderInputGroup() }
            { this.renderSortableList(tasks) }
          </div>
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
    fontSize: '150%',
    fontWeight: '700',
    lineHeight: '38px'
  }
};

const mapStateToProps = ({ tasks, newTask, global, alert }) =>
({ tasks, newTask, global, alert });

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTasks, updateTasks, uploadTasks, addNewTask, updateNewTask, updateGlobal, resetAlert
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
