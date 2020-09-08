const TodoAPI = {};

const getOption = (body) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

TodoAPI.fetchTodoData = () =>
  fetch(`/api/todoData`).then((todoData) => todoData.json());

TodoAPI.addTask = (task) => fetch(`/api/addTask`, getOption({ task }));

TodoAPI.updateTaskStatus = (id) =>
  fetch(`/api/updateTaskStatus`, getOption({ id }));

TodoAPI.removeTask = (id) => fetch(`/api/removeTask`, getOption({ id }));

TodoAPI.removeTodo = (id) => fetch(`/api/removeTodo`, getOption({}));

TodoAPI.updateTitle = (title) =>
  fetch(`/api/updateTitle`, getOption({ title }));

export default TodoAPI;
