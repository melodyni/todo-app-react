import React from 'react';
import '../todo.css';

const Task = ({ task, updateTaskStatus }) => {
  const { id, message, status } = task;
  return (
    <div onClick={() => updateTaskStatus(id)} className={`flex ${status}`}>
      <div className='checkBox'></div>
      <div className='text'>{message}</div>
    </div>
  );
};

export default Task;
