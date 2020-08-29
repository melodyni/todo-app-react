import React from 'react';
import '../todo.css';

const Task = (props) => {
  return (
    <div className='flex'>
      <div className='checkBox'></div>
      <p>{`Buy milk`}</p>
    </div>
  );
};

export default Task;
