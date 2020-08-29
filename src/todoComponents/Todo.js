import React from 'react';
import Task from './Task';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }
  render() {
    return <Task />;
  }
}

export default Todo;
