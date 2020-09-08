import React, { useState, useEffect } from 'react';
import InputBox from './InputBox';
import TaskList from './TaskList';
import Title from './Title';
import withDelete from './withDelete';
import TodoAPI from './TodoAPI';

const DelibleTitle = withDelete(Title);

const Todo = (props) => {
  const [todo, setTodo] = useState({ lastId: 0, title: 'todo', tasks: [] });

  const updateTodo = () => {
    TodoAPI.fetchTodoData().then(setTodo);
  };
  useEffect(updateTodo, []);

  const addTask = (task) => TodoAPI.addTask(task).then(updateTodo);

  const updateTaskStatus = (id) =>
    TodoAPI.updateTaskStatus(id).then(updateTodo);

  const removeTask = (id) => TodoAPI.removeTask(id).then(updateTodo);

  const removeTodo = (id) => TodoAPI.removeTodo(id).then(updateTodo);

  const updateTitle = (title) => TodoAPI.updateTitle(title).then(updateTodo);

  return (
    <div>
      <DelibleTitle
        title={todo.title}
        updateTitle={updateTitle}
        remove={removeTodo}
      />
      <TaskList
        tasks={todo.tasks}
        updateTaskStatus={updateTaskStatus}
        removeTask={removeTask}
      />
      <InputBox onEnter={addTask} />
    </div>
  );
};

export default Todo;
