import React from 'react';
import InputBox from './InputBox';
import Delete from './Delete';
import '../todo.css';

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
    const { title, removeTodo } = this.props;
    if (this.state.isEditable) {
      return <InputBox text={title} onEnter={this.updateTitle} />;
    }
    return (
      <div className='taskBox'>
        <div className='titleText' onClick={this.handleClick}>
          {title}
        </div>
        <Delete id={null} remove={removeTodo} />
      </div>
    );
  }
}

export default Title;
