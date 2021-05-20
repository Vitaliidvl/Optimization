import React from 'react';

const Hoc = (props) => {
  console.log('Hoc');

  return <div>{props.children}</div>;
};

export default Hoc;
