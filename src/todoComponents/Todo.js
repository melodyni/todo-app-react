import React from 'react';
import InputBox from './InputBox';
import TaskList from './TaskList';
import Title from './Title';
import { getDefaultStatus, getNextStatus } from './status';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'todo', tasks: [] };
    this.addTask = this.addTask.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  addTask(task) {
    const newTask = { message: task, status: getDefaultStatus() };
    this.setState((state) => ({
      tasks: [...state.tasks, newTask],
    }));
  }

  updateTaskStatus(id) {
    const tasks = this.state.tasks.slice();
    tasks[id].status = getNextStatus(tasks[id].status);
    this.setState({ tasks: tasks });
  }

  updateTitle(title) {
    this.setState({ title: title });
  }

  render() {
    return (
      <div>
        <Title title={this.state.title} updateTitle={this.updateTitle} />
        <TaskList
          tasks={this.state.tasks}
          updateTaskStatus={this.updateTaskStatus}
        />
        <InputBox onEnter={this.addTask} />
      </div>
    );
  }
}

export default Todo;
