import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { arrayMove } from 'react-sortable-hoc';

import SortableListComponent from '../components/sortableList';
import { Button, InputGroup, Alert } from '../components/reusableComponents';
import { fetchTasks, saveTasks, updateGlobal, resetAlert } from '../actions/index';

class App extends Component {
  state = {
    tasks: [],
    newTask: ''
  };

  componentWillMount() {
    this.props.fetchTasks();
  }

  componentWillReceiveProps({ tasks: nextTasks }) {
    const { tasks: curTasks } = this.props;
    if (nextTasks !== curTasks) {
      this.setState({ tasks: nextTasks });
      this.props.updateGlobal({ addingTask: false, changeMade: false });
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
            disabled={global.addingTask}
            // onClick={() => updateGlobal({ addingTask: true })}
            onClick={this.addNewTask}
          />
          <Button
            text='Save'
            divStyle={{backgroundColor:'#78da9f',color:'#fff',fontSize:'75%',marginLeft:'8px'}}
            disabled={!global.changeMade}
            onClick={() => this.props.saveTasks(this.state.tasks)}
          />
        </div>
      </div>
    )
  }

  updateNewTask = newTask => {
    this.setState({ newTask });
  }

  // addNewTask = () => {
  //   const { tasks, newTask } = this.state;
  //   tasks.unshift(newTask);
  //   this.setState({ tasks, newTask: '' });
  //   this.props.updateGlobal({ addingTask: false, changeMade: true });
  // }

  addNewTask = () => {
    const { tasks } = this.state;
    tasks.unshift(null);
    this.setState({ tasks });
    // this.props.updateGlobal({ addingTask: false, changeMade: true });
  }

  removeTask = index => {
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({ tasks });
    this.props.updateGlobal({ changeMade: true });
  }

  renderInputGroup() {
    const { global } = this.props;
    if ( !global.addingTask ) {
      return null;
    }

    const { newTask } = this.state;
    return (
      <InputGroup
        actionText='Add'
        value={newTask}
        onChange={this.updateNewTask}
        onClick={this.addNewTask}
      />
    )
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      tasks: arrayMove(this.state.tasks, oldIndex, newIndex),
    });
    this.props.updateGlobal({ changeMade: true });
  }

  renderSortableList() {
    const { tasks } = this.state;
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
  fetchTasks, saveTasks, updateGlobal, resetAlert
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
