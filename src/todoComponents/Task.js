import React from 'react';
import '../todo.css';

const Task = ({ task, id }) => {
  return (
    <div className='flex'>
      <div className='checkBox'></div>
      <p>{task.message}</p>
    </div>
  );
};

export default Task;
