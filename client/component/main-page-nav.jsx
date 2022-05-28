import React from 'react';

export default function MainPageHeader(props) {
  return (
    <div className='row'>
      <div className='mt-5 hotel-div w-50 p-2 custom-border text-center'>
        <a className={`a w-50 text-center ${props.route === 'mainPage' ? 'underline' : ''}`} href={`#mainPage?search=${props.search}`}><i className='fas fa-hotel pe-2'></i> Yelp Hotels</a>
      </div>
      <div className='mt-5 hotel-div w-50  p-2 custom-border-right text-center'>
        <a href={`#newHotelPage?search=${props.search}`} className={`w-50 a text-center ${props.route === 'newHotelPage' ? 'underline' : ''}`}> My Hotels</a>
      </div>
    </div>
  );
}
