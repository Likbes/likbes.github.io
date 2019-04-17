import { hot } from 'react-hot-loader';
import { load } from 'redux-localstorage-simple';
import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../constants';

let TASKS = load({ namespace: 'todo-list' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: [],
  };
}

const tasks = (state = TASKS.tasks, { id, text, isCompleted, type }) => {
  switch (type) {
    case ADD_TASK: {
      return [
        ...state,
        {
          id,
          text,
          isCompleted,
        },
      ];
    }
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== id);
    case COMPLETE_TASK:
      return [...state].map(task => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    default:
      return state;
  }
};

export default hot(module)(tasks);
