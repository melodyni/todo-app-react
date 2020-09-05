import React, { useState } from 'react';
import InputBox from './InputBox';
import TaskList from './TaskList';
import Title from './Title';
import withDelete from './withDelete';
import { getDefaultStatus, getNextStatus } from './status';

const DelibleTitle = withDelete(Title);

const Todo = (props) => {
  const [lastId, setLastId] = useState(0);
  const [title, setTitle] = useState('todo');
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = { id: lastId, message: task, status: getDefaultStatus() };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (id) => {
    const newTasks = tasks.map((task) => ({ ...task }));
    const taskToUpdate = newTasks.find((task) => task.id === id);
    taskToUpdate.status = getNextStatus(taskToUpdate.status);
    setTasks(newTasks);
  };

  const removeTask = (id) => {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  };

  const removeTodo = () => {
    setLastId(0);
    setTitle('todo');
    setTasks([]);
  };

  const updateTitle = () => {
    setTitle('todo');
  };

  return (
    <div>
      <DelibleTitle
        title={title}
        updateTitle={updateTitle}
        remove={removeTodo}
      />
      <TaskList
        tasks={tasks}
        updateTaskStatus={updateTaskStatus}
        removeTask={removeTask}
      />
      <InputBox onEnter={addTask} />
    </div>
  );
};

export default Todo;
