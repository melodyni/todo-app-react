import React from 'react';

const withDelete = (Component) => {
  return function (props) {
    return (
      <div className='taskBox'>
        <Component {...props} />
        <div className='cross' onClick={() => props.removeTask(props.id)}>
          X
        </div>
      </div>
    );
  };
};

export default withDelete;
