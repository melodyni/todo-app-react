import React from 'react';
import Task from './Task';
import InputBox from './InputBox';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  addTask(task) {
    const newTask = { message: task, isDone: false };
    this.setState({ tasks: this.state.tasks.concat(newTask) });
  }

  toggleStatus(id) {
    const tasks = this.state.tasks.slice();
    tasks[id].isDone = !tasks[id].isDone;
    this.setState({ tasks: tasks });
  }

  render() {
    const tasks = this.state.tasks.map((task, index) => (
      <Task
        task={task}
        key={index}
        id={index}
        toggleStatus={this.toggleStatus}
      />
    ));

    return (
      <div>
        {tasks}
        <InputBox addTask={this.addTask} />
      </div>
    );
  }
}

export default Todo;
