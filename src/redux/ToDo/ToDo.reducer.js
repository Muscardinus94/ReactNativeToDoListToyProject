import ToDoTypes from "./ToDo.types";
import {
  filterOutRemovedItems,
  toggleSelectedItem,
  filterFinishedItems,
} from "./ToDo.utils";

const INITIAL_STATE = {
  toDoList: [],
  finishList: [],
};

const toDoReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ToDoTypes.ADD_TODO:
      return { ...state, toDoList: [...state.toDoList, payload] };
    case ToDoTypes.REMOVE_TODO:
      return {
        ...state,
        toDoList: filterOutRemovedItems(state.toDoList, payload),
      };
    case ToDoTypes.TOGGLE_TODO:
      return {
        ...state,
        toDoList: toggleSelectedItem(state.toDoList, payload),
      };
    case ToDoTypes.SEND_TO_FINISH:
      return {
        ...state,
        toDoList: filterFinishedItems(state.toDoList, state.finishList)[0],
        finishList: filterFinishedItems(state.toDoList, state.finishList)[1],
      };
    default:
      return state;
  }
};

export default toDoReducer;
