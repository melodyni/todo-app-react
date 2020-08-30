import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, updateTaskStatus }) => {
  return tasks.map((task, index) => (
    <Task
      task={task}
      key={index}
      id={index}
      updateTaskStatus={updateTaskStatus}
    />
  ));
};

export default TaskList;
