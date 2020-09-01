import React from 'react';
import InputBox from './InputBox';
import TaskList from './TaskList';
import { getDefaultStatus, getNextStatus } from './status';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
  }

  addTask(task) {
    const newTask = { message: task, status: getDefaultStatus() };
    this.setState({ tasks: this.state.tasks.concat(newTask) });
  }

  updateTaskStatus(id) {
    const tasks = this.state.tasks.slice();
    tasks[id].status = getNextStatus(tasks[id].status);
    this.setState({ tasks: tasks });
  }

  render() {
    return (
      <div>
        <TaskList
          tasks={this.state.tasks}
          updateTaskStatus={this.updateTaskStatus}
        />
        <InputBox addTask={this.addTask} />
      </div>
    );
  }
}

export default Todo;
