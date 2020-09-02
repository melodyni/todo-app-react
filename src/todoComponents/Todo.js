import React from 'react';
import InputBox from './InputBox';
import TaskList from './TaskList';
import Title from './Title';
import { getDefaultStatus, getNextStatus } from './status';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.lastId = 1;
    this.state = { title: 'todo', tasks: [] };
    this.addTask = this.addTask.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  addTask(task) {
    const id = this.lastId++;
    const newTask = { id, message: task, status: getDefaultStatus() };
    this.setState((state) => ({
      tasks: [...state.tasks, newTask],
    }));
  }

  updateTaskStatus(id) {
    this.setState((state) => {
      const tasks = state.tasks.map((task) => ({ ...task }));
      const taskToUpdate = tasks.find((task) => task.id === id);
      taskToUpdate.status = getNextStatus(taskToUpdate.status);
      return { title: state.title, tasks };
    });
  }

  updateTitle(title) {
    this.setState({ title });
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
