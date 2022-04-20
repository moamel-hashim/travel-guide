import React from 'react';

export default class Hotels extends React.Component {
  render() {
    const { hotels } = this.props;
    return (
      hotels.map((hotel, index) => {
        return (
          <div className="mt-5 border-style box-shadow" key={index}>
            <div className="row ps-3">
              <div className="img-container w-25 rounded background-image" style={{ backgroundImage: `url(${hotel.image_url})` }}>
              </div>
              <div className='title-container w-50'>
                <h3 className="color-white fs-5">{hotel.name}</h3>
                <span><i className='fas fa-star light-purple'></i></span>
                <span><i className='fas fa-star light-purple'></i></span>
                <span><i className='fas fa-star light-purple'></i></span>
                <span><i className='fas fa-star light-purple'></i></span>
                <span><i className={`${hotel.rating === 5 ? 'fas fa-star light-purple' : hotel.rating === 4.5 ? 'fas fa-star-half-alt light-purple' : 'far fa-star light-purple'}`}></i></span>
                <span className='ps-3'>{`${hotel.review_count} reviews`}</span>
                <div className="w-25 mt-2">
                  <p><span className='background-gray p-1 rounded'>{hotel.categories[0].title}</span> {hotel.location.city}</p>
                </div>
                <div className="w-100">
                  <p>{`${hotel.location.address1}, ${hotel.location.city}, ${hotel.location.zip_code}`}<br></br>
                  {`${hotel.display_phone}`}</p>
                </div>
              </div>
              <div className="button-container w-25 d-flex justify-content-end">
                <a className='button-style p-4 d-flex align-items-center' href={`#hotel-details?hotelId=${hotel.id}`}><i className='fas fa-chevron-right text-white-50'></i></a>
              </div>
            </div>
          </div>
        );
      })
    );
  }
}
