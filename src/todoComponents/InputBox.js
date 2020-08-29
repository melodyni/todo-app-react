import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.text.length > 0) {
      this.props.addTask(this.state.text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.text}
          autoFocus
        ></input>
      </form>
    );
  }
}

export default InputBox;
