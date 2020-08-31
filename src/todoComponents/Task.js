import React from 'react';
import '../todo.css';

const Task = ({ task, id, updateTaskStatus }) => {
  const status = ['todo', 'doing', 'done'];
  const style = status[task.status];
  return (
    <div onClick={() => updateTaskStatus(id)} className={`flex ${style}`}>
      <div className='checkBox'></div>
      <div className='text'>{task.message}</div>
    </div>
  );
};

export default Task;
