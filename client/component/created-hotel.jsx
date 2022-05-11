import React from 'react';

export default class CreatedHotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { addedHotels } = this.props;
    return (
      addedHotels.map((hotel, index) => {
        return (
          <>
            <div className="mt-5 border-style box-shadow position-relative" key={index}>
              <div className="row image-padding">
                <div className="img-container w-25 background-image custom-border" style={{ backgroundImage: `url(${hotel.photoUrl})` }}>
                </div>
                <div className='title-container w-75  mb-5 row'>
                  <div className='mb-5 mt-2'>
                    <a href={`#editPage?hotelId=${hotel.hotelId}`} className='position-absolute end-0 fs-4 light-purple'><i className='fas fa-edit'></i></a>
                    <button className='position-absolute button' onClick={this.handleOnClick}><i className='fas fa-trash'></i></button>
                  </div>
                  <h3 className="color-white fs-5">{hotel.name}</h3>
                  <div className="w-50">
                    <p>{`${hotel.line1}, ${hotel.city}, ${hotel.state}, ${hotel.zipCode}`}<br></br>
                      {`${hotel.phoneNumber}`}</p>
                  </div>
                  <div className='description w-50'>
                    <p>{hotel.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })
    );
  }
}
