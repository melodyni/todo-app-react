import React from 'react';
import '../todo.css';

const Task = ({ task, id, updateTaskStatus }) => {
  return (
    <div onClick={() => updateTaskStatus(id)} className={`flex ${task.status}`}>
      <div className='checkBox'></div>
      <div className='text'>{task.message}</div>
    </div>
  );
};

export default Task;
