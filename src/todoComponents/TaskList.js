import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, updateTaskStatus, removeTask }) => {
  return tasks.map((task) => (
    <Task
      task={task}
      key={task.id}
      updateTaskStatus={updateTaskStatus}
      removeTask={removeTask}
    />
  ));
};

export default TaskList;
