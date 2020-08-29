import React from 'react';
import Task from './Task';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{ message: 'Buy Milk' }, { message: 'fill timesheets' }],
    };
  }
  render() {
    const tasks = this.state.tasks.map((task, index) => (
      <Task task={task} key={index} id={index} />
    ));
    return <div>{tasks}</div>;
  }
}

export default Todo;
