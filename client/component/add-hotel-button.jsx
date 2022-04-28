import React from 'react';

export default function AddHotelButton(props) {
  return (
      <div className='row justify-content-end align-items-end height'>
        <a href={`#addHotel?search=${props.search}`} className='w-auto circle' title='New'><i className='fas fa-plus plus'></i></a>
      </div>
  );
}
