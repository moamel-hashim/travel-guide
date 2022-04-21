import React from 'react';

export default class AddHotelButton extends React.Component {
  render() {
    return (
      <div className='row justify-content-end align-items-end height'>
        <a href="#addHotel" className='w-auto circle' title='New'><i className='fas fa-plus plus'></i></a>
      </div>
    );
  }
}
