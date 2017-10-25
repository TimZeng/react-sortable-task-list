import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { arrayMove } from 'react-sortable-hoc';

import SortableListComponent from '../components/sortableList';
import { Button, InputGroup, Alert } from '../components/reusableComponents';
import { fetchTasks, uploadTasks, updateGlobal, resetAlert } from '../actions/index';

class App extends Component {
  state = {
    tasks: [],
    newTask: {}
  };

  componentWillMount() {
    this.props.fetchTasks();
  }

  componentWillReceiveProps({ tasks: nextTasks }) {
    const { tasks: curTasks } = this.props;
    if (nextTasks !== curTasks) {
      this.setState({ tasks: nextTasks });
      this.props.updateGlobal({ changeMade: false });
    }
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
            disabled={!global.changeMade}
            onClick={this.saveTasks}
          />
        </div>
      </div>
    )
  }

  addNewTask = () => {
    const { newTask, tasks } = this.state;
    // if there is an empty new task, then don't add a new one
    if ( !!newTask.new && !newTask.val ) {
      return;

    // if there is a valid new task, then add it to state.tasks
    // before creating new one
    } else if ( !!newTask.new && !!newTask.val ) {
      return this.processNewTask(true);
    }

    // if there is currently no new task, create one
    this.setState({ newTask: { new: true, val: null } });
  }

  updateNewTask = newTaskVal => {
    this.setState({ newTask: {new: true, val: newTaskVal} });
    this.props.updateGlobal({ changeMade: true });
  }

  handleKeyPress = event => {
    if ( event.key === 'Enter' ) {
      this.processNewTask(false);
    }
  }

  processNewTask = isAdding => {
    const { newTask, tasks } = this.state;
    if ( !newTask.val ) return;

    tasks.unshift(newTask.val);
    const task = !!isAdding ? { new: true, val: null } : {};
    this.setState({ tasks, newTask: task });
    this.props.updateGlobal({ changeMade: true });
  }

  resetNewTask = () => {
    this.setState({ newIndex: {} });
  }

  removeTask = index => {
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.updateTasks(tasks);
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    const tasks = arrayMove(this.state.tasks, oldIndex, newIndex);
    this.updateTasks(tasks);
  }

  updateTasks = tasks => {
    this.setState({ tasks });
    this.props.updateGlobal({ changeMade: true });
  }

  saveTasks = () => {
    const { newTask, tasks } = this.state;
    const { uploadTasks } = this.props;

    if ( !!newTask.val ) {
      tasks.unshift(newTask.val);
      this.setState({ newTask: {} })
    }

    uploadTasks(tasks);
  }

  renderInputGroup() {
    const { newTask } = this.state;
    if ( !newTask.new ) {
      return null;
    }

    return (
      <div className="light-text sortable-list-item">
        <input
          style={styles.inputStyle}
          value={newTask.val||''}
          onChange={e => this.updateNewTask(e.target.value)}
          onKeyPress={this.handleKeyPress}
          placeholder='New task'
          autoFocus
        />
        <i
          onClick={this.resetNewTask}
          style={{lineHeight: '24px'}}
          className="button fa fa-trash-o"
        />
      </div>
    )
  }

  renderSortableList() {
    const { tasks, newTask } = this.state;
    return (
      <SortableListComponent
        items={tasks}
        onSortEnd={this.onSortEnd}
        onDelete={this.removeTask}
      />
    )
  }

  render() {
    return (
      <div>
        <header>
          <h5>Sortable Task List - Tim Zeng - ReactJS & Redux</h5>
        </header>

        <div className='container'>
          { this.renderAlert() }
          <div className='content'>
            { this.renderButtons() }
            { this.renderInputGroup() }
            { this.renderSortableList() }
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

const mapStateToProps = ({ tasks, global, alert }) => ({ tasks, global, alert });

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTasks, uploadTasks, updateGlobal, resetAlert
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
