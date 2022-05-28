import React from 'react';

export default function DarkBackground(props) {
  return <div className='full-width over-flow-x' style={{ backgroundColor: '#36393F' }}>{props.children}</div>;
}
