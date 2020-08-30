import React from 'react';
import '../todo.css';

const Task = ({ task, id, toggleStatus }) => {
  const status = { 1: 'doing', 2: 'done' };
  const style = status[task.status];
  return (
    <div onClick={() => toggleStatus(id)} className={`flex ${style}`}>
      <div className='checkBox'></div>
      <div className='text'>{task.message}</div>
    </div>
  );
};

export default Task;
