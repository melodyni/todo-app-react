import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, updateTaskStatus }) => {
  return tasks.map((task) => (
    <Task task={task} key={task.id} updateTaskStatus={updateTaskStatus} />
  ));
};

export default TaskList;
