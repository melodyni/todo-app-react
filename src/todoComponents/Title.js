import React from 'react';
import InputBox from './InputBox';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditable: false };
    this.handleClick = this.handleClick.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  handleClick() {
    this.setState({ isEditable: true });
  }

  updateTitle(title) {
    this.props.updateTitle(title);
    this.setState({ isEditable: false });
  }

  render() {
    if (this.state.isEditable) {
      return <InputBox text={this.props.title} onEnter={this.updateTitle} />;
    }
    return <h2 onClick={this.handleClick}>{this.props.title}</h2>;
  }
}

export default Title;
