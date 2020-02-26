import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_STARTED,
  DELETE_TODO
} from "./types";

import axios from "axios";

//action creator's
export const addTodo = ({ title, userId }) => {
  return (dispatch, getState) => {
    dispatch(addTodoStarted());

    console.log("current state:", getState());

    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        userId,
        completed: false
      })
      .then(res => {
        setTimeout(() => {
          dispatch(addTodoSuccess(res.data));
        }, 2500);
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

const addTodoStarted = () => ({
  type: ADD_TODO_STARTED
});

const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    ...todo
  }
});

const addTodoFailure = error => ({
  type: ADD_TODO_FAILURE,
  payload: {
    error
  }
});
