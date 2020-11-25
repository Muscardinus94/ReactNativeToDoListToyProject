import ToDo from "../../components/ToDo";
import ToDoTypes from "./ToDo.types";

export const addToDo = (item) => ({
  type: ToDoTypes.ADD_TODO,
  payload: {
    id: Math.random().toString(36).substring(7),
    item,
    checked: false,
  },
});

export const removeToDo = (id) => ({
  type: ToDoTypes.REMOVE_TODO,
  payload: id,
});

export const toggleToDoItem = (id) => ({
  type: ToDoTypes.TOGGLE_TODO,
  payload: id,
});

export const sendToFinishList = () => ({
  type: ToDoTypes.SEND_TO_FINISH,
});
