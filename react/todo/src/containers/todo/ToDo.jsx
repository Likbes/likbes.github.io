/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import { addTask } from '../../actions/actionCreators';
import { removeTask } from '../../actions/actionCreators';
import { completeTask } from '../../actions/actionCreators';
import { changeFilter } from '../../actions/actionCreators';

import ToDoInput from '../../components/todoInput/todoInput';
import ToDoList from '../../components/todoList/todoList';
import Footer from '../../components/footer/footer';

import style from './ToDo.scss';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: '',
    };
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    });
  }

  addTaskHandler = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === 'Enter') {
      const { addTask } = this.props;

      addTask(new Date().getTime(), taskText, false);

      this.setState({
        taskText: '',
      });
    }
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(t => t.isCompleted);
      case 'active':
        return tasks.filter(t => !t.isCompleted);
      default:
        return tasks;
    }
  }

  getActiveTasksCounter = tasks => {
    return tasks.filter(task => !task.isCompleted).length;
  }

  render() {
    const { taskText } = this.state;
    const { tasks, filters, removeTask, completeTask, changeFilter } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const taskCounter = this.getActiveTasksCounter(tasks);

    return (
      <div className={style.todoWrapper}>
        <ToDoInput
          onChange={this.handleInputChange}
          onKeyPress={this.addTaskHandler}
          value={taskText}
        />
        {isTasksExist && (
          <ToDoList
            tasksList={filteredTasks}
            removeTask={removeTask}
            completeTask={completeTask}
          />
        )}
        {isTasksExist && (
          <Footer
            amount={taskCounter}
            activeFilter={filters}
            changeFilter={changeFilter}
          />
        )}
      </div>
    );
  }
}

export default hot(module)(
  connect(
    ({ tasks, filters }) => ({
      tasks,
      filters,
      // eslint-disable-next-line prettier/prettier
    }), { addTask, removeTask, completeTask, changeFilter })(ToDo)
);
