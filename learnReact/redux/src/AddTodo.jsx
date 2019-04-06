/* eslint-disable no-plusplus */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

let counter = 0;
const addTodoAction = text => {
  return {
    type: 'ADD_TODO',
    id: counter++,
    text,
  };
};

const AddTodo = (props, { store }) => {
  let input;
  return (
    <>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        type="button"
        onClick={() => {
          store.dispatch(addTodoAction(input.value, counter));
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </>
  );
};

AddTodo.contextTypes = {
  store: PropTypes.object,
};

export default hot(module)(AddTodo);
