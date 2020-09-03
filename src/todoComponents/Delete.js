import React from 'react';

const Delete = ({ id, remove }) => {
  return (
    <div className='cross' onClick={() => remove(id)}>
      X
    </div>
  );
};

export default Delete;
