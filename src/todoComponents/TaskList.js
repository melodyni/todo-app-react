import React from 'react';
import Task from './Task';

import withDelete from './withDelete';

const DelibleTask = withDelete(Task);

const TaskList = ({ tasks, updateTaskStatus, removeTask }) => {
  return tasks.map((task) => (
    <DelibleTask
      id={task.id}
      task={task}
      key={task.id}
      updateTaskStatus={updateTaskStatus}
      removeTask={removeTask}
    />
  ));
};

export default TaskList;
