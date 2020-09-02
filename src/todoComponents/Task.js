import React from 'react';
import '../todo.css';

const Task = ({ task, updateTaskStatus, removeTask }) => {
  const { id, message, status } = task;
  return (
    <div className={`taskBox ${status}`}>
      <div className='checkBox'></div>
      <div className='text' onClick={() => updateTaskStatus(id)}>
        {message}
      </div>
      <div className='cross' onClick={() => removeTask(id)}>
        X
      </div>
    </div>
  );
};

export default Task;
