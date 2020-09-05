import React, { useState } from 'react';
import InputBox from './InputBox';
import '../todo.css';

const Title = (props) => {
  const [isEditable, setEditable] = useState(false);

  const updateTitle = (newTitle) => {
    props.updateTitle(newTitle);
    setEditable(!isEditable);
  };

  if (isEditable) {
    return <InputBox text={props.title} onEnter={updateTitle} />;
  }
  return (
    <div className='taskBox'>
      <div className='titleText' onClick={() => setEditable(!isEditable)}>
        {props.title}
      </div>
    </div>
  );
};

export default Title;
