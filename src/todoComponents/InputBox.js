import React, { useState } from 'react';

const InputBox = (props) => {
  const [text, setText] = useState(props.text);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length > 0) {
      props.onEnter(text);
      setText('');
    }
  };

  const handleChange = (event) => setText(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={text} autoFocus></input>
    </form>
  );
};

InputBox.defaultProps = { text: '' };

export default InputBox;
