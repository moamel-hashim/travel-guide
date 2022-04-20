import React from 'react';

export default class DarkBackground extends React.Component {
  render() {
    return <div className='full-width over-flow-x' style={{ backgroundColor: '#36393F' }}>{this.props.children}</div>;
  }
}
