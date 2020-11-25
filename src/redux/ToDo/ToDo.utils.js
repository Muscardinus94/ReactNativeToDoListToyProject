export const filterOutRemovedItems = (toDoList, targetId) => {
  return toDoList.filter(({ id }) => id !== targetId);
};

export const toggleSelectedItem = (toDoList, targetId) => {
  toDoList.map((item) => {
    if (item.id === targetId) item.checked = !item.checked;
  });
  return [...toDoList];
};

export const filterFinishedItems = (toDoList, finishList) => {
  const tmpToDoList = toDoList.filter((item) => {
    if (item.checked !== true) return true;
    else finishList = [...finishList, item];
  });
  return [tmpToDoList, finishList];
};
