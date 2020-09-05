import React from 'react';
import InputBox from './InputBox';
import TaskList from './TaskList';
import Title from './Title';
import withDelete from './withDelete';
import { getDefaultStatus, getNextStatus } from './status';

const DelibleTitle = withDelete(Title);

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'todo', tasks: [], lastId: 1 };
    this.addTask = this.addTask.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTask(task) {
    const id = this.state.lastId;
    const newTask = { id, message: task, status: getDefaultStatus() };
    this.setState((state) => ({
      tasks: [...state.tasks, newTask],
      lastId: state.lastId + 1,
    }));
  }

  updateTaskStatus(id) {
    this.setState((state) => {
      const tasks = state.tasks.map((task) => ({ ...task }));
      const taskToUpdate = tasks.find((task) => task.id === id);
      taskToUpdate.status = getNextStatus(taskToUpdate.status);
      return { tasks };
    });
  }

  updateTitle(title) {
    this.setState({ title });
  }

  removeTask(id) {
    this.setState((state) => {
      const tasks = state.tasks.filter((task) => task.id !== id);
      return { tasks };
    });
  }

  removeTodo() {
    this.setState({ title: 'todo', tasks: [], status: getDefaultStatus() });
  }

  render() {
    return (
      <div>
        <DelibleTitle
          title={this.state.title}
          updateTitle={this.updateTitle}
          remove={this.removeTodo}
        />
        <TaskList
          tasks={this.state.tasks}
          updateTaskStatus={this.updateTaskStatus}
          removeTask={this.removeTask}
        />
        <InputBox onEnter={this.addTask} />
      </div>
    );
  }
}

export default Todo;
