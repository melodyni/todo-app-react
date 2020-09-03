import React from 'react';
import Delete from './Delete';
import '../todo.css';

const Task = ({ task, updateTaskStatus, removeTask }) => {
  const { id, message, status } = task;
  return (
    <div className={`taskBox ${status}`}>
      <div className='checkBox'></div>
      <div className='text' onClick={() => updateTaskStatus(id)}>
        {message}
      </div>
      <Delete id={id} remove={removeTask} />
    </div>
  );
};

export default Task;
