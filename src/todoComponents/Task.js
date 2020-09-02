import React from 'react';
import '../todo.css';

const Task = ({ task, updateTaskStatus }) => {
  const { id, message, status } = task;
  return (
    <div className={`flex ${status}`}>
      <div className='checkBox'></div>
      <div className='text' onClick={() => updateTaskStatus(id)}>
        {message}
      </div>
      <div className='cross'>{'X'}</div>
    </div>
  );
};

export default Task;
