import React from 'react';
import '../todo.css';

const Task = ({ task, id, toggleStatus }) => {
  const status = task.isDone ? 'done' : '';
  return (
    <div onClick={() => toggleStatus(id)} className={`flex ${status}`}>
      <div className='checkBox'></div>
      <div className='text'>{task.message}</div>
    </div>
  );
};

export default Task;
