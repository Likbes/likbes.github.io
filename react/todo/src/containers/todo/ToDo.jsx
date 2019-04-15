/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import { addTask } from '../../actions/actionCreators';

import ToDoInput from '../../components/todoInput/todoInput';
import ToDoList from '../../components/todoList/todoList';
import Footer from '../../components/footer/footer';

import style from './ToDo.scss';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: 'all',
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

  render() {
    const { activeFilters, taskText } = this.state;
    const { tasks } = this.props;
    const isTasksExist = tasks && tasks.length > 0;

    return (
      <div className={style.todoWrapper}>
        <ToDoInput
          onChange={this.handleInputChange}
          onKeyPress={this.addTaskHandler}
          value={taskText}
        />
        {isTasksExist && <ToDoList tasksList={tasks} />}
        {isTasksExist && (
          <Footer amount={tasks.length} activeFilters={activeFilters} />
        )}
      </div>
    );
  }
}

export default hot(module)(
  connect(
    state => ({
      tasks: state.tasks,
      // eslint-disable-next-line prettier/prettier
    }), { addTask })(ToDo)
);
