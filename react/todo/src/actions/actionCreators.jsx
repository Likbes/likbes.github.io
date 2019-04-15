/* eslint-disable import/prefer-default-export */
import { ADD_TASK } from '../constants';

export const addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted,
});
