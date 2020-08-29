import React from 'react';
import Task from './Task';
import InputBox from './InputBox';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{ message: 'Buy Milk' }, { message: 'fill timesheets' }],
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    const newTask = { message: task };
    this.setState({ tasks: this.state.tasks.concat(newTask) });
  }

  render() {
    const tasks = this.state.tasks.map((task, index) => (
      <Task task={task} key={index} id={index} />
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
