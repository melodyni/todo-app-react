import React from 'react';
import InputBox from './InputBox';
import TaskList from './TaskList';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
  }

  addTask(task) {
    const newTask = { message: task, status: 0 };
    this.setState({ tasks: this.state.tasks.concat(newTask) });
  }

  updateTaskStatus(id) {
    const tasks = this.state.tasks.slice();
    tasks[id].status = (tasks[id].status + 1) % 3;
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
