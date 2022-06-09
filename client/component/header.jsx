import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="container  position-sticky">
        <header className='mt-4 p-3'>
          <a href="#" className='color-white header font-size'>Travel Guide</a>
        </header>
      </div>
    );
  }
}
