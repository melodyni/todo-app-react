const redis = require('redis');
const redisClient = redis.createClient({ db: 1 });

const { getDefaultStatus, getNextStatus } = require('./status');

const todoTemplate = () => ({ tasks: [], title: 'todo' });

const increment = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.incr(key, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getTodo = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const setTodo = (key, value) => {
  return new Promise((resolve, reject) => {
    redisClient.set(key, JSON.stringify(value), (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getTodoData = (req, res) => {
  getTodo('todoData')
    .then((x) => {
      req.app.locals.todoData = JSON.parse(x) || todoTemplate();
    })
    .then(() => {
      return res.json(req.app.locals.todoData);
    });
};

const addTask = (req, res) => {
  const { task } = req.body;
  const { todoData } = req.app.locals;
  increment('lastId')
    .then((id) => {
      const newTask = { id, message: task, status: getDefaultStatus() };
      todoData.tasks.push(newTask);
    })
    .then(() => setTodo('todoData', todoData).then(() => res.end()));
};

const updateTaskStatus = (req, res) => {
  const { id } = req.body;
  const { todoData } = req.app.locals;
  const taskToUpdate = todoData.tasks.find((task) => task.id === id);
  taskToUpdate.status = getNextStatus(taskToUpdate.status);
  setTodo('todoData', todoData).then(() => res.end());
};

const removeTask = (req, res) => {
  const { id } = req.body;
  const { todoData } = req.app.locals;
  todoData.tasks = todoData.tasks.filter((task) => task.id !== id);
  setTodo('todoData', todoData).then(() => res.end());
};

const removeTodo = (req, res) => {
  setTodo('todoData', todoTemplate()).then(() => res.end());
};

const updateTitle = (req, res) => {
  const { title } = req.body;
  const { todoData } = req.app.locals;
  setTodo('todoData', { ...todoData, title }).then(() => res.end());
};

module.exports = {
  getTodoData,
  updateTaskStatus,
  removeTask,
  removeTodo,
  updateTitle,
  addTask,
};
