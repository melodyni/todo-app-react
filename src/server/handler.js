const { getDefaultStatus, getNextStatus } = require('./status');

let todoState = { lastId: 0, tasks: [], title: 'todo' };

const getTodoData = (req, res) => {
  res.json({ ...todoState });
};

const addTask = (req, res) => {
  const { task } = req.body;
  const id = todoState.lastId++;
  const newTask = { id, message: task, status: getDefaultStatus() };
  todoState.tasks.push(newTask);
  res.end();
};

const updateTaskStatus = (req, res) => {
  const { id } = req.body;
  const taskToUpdate = todoState.tasks.find((task) => task.id === id);
  taskToUpdate.status = getNextStatus(taskToUpdate.status);
  res.end();
};

const removeTask = (req, res) => {
  const { id } = req.body;
  todoState.tasks = todoState.tasks.filter((task) => task.id !== id);
  res.end();
};

const removeTodo = (req, res) => {
  todoState = { lastId: 0, tasks: [], title: 'todo' };
  res.end();
};

const updateTitle = (req, res) => {
  const { title } = req.body;
  todoState = { ...todoState, title };
  console.log(todoState);
  res.end();
};

module.exports = {
  getTodoData,
  addTask,
  updateTaskStatus,
  removeTask,
  removeTodo,
  updateTitle,
};
