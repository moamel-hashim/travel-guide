import React from 'react';

export default class Hotels extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { hotels: [] };
    console.log('value of this.props in the Hotels class:', this.props.hotels);
  }

  render() {
    const { hotels } = this.props;
    return (
      hotels.map((hotel, index) => {
        console.log('value of hotel parameter:', hotel);
        return (
          <div className="mt-5 border-style box-shadow" key={index}>
            <div className="row ps-3">
              <div className="img-container w-25 rounded background-image" style={{ backgroundImage: `url(${hotel.image_url})` }}>
              </div>
              <div className='title-container w-75'>
                <h1 className="color-white">{hotel.name}</h1>
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
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, deserunt.</p>
                </div>
              </div>
            </div>
          </div>
        );
      })
    );
  }
}
