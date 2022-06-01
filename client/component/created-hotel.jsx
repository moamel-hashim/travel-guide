import React from 'react';

export default class CreatedHotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleOnClick(event) {
    const id = parseInt(event.target.getAttribute('id'));
    this.setState({
      id
    });
  }

  handleCancel() {
    this.setState({ id: null });
  }

  handleConfirm() {
    fetch(`/api/travelGuide/${this.state.id}`,
      {
        method: 'DELETE'
      })
      .then(() => {
        this.props.getAddedHotel();
      });
  }

  render() {
    const { addedHotels } = this.props;
    return (
      addedHotels.map((hotel, index) => {
        return (
          <>
          <div className={`overlay ${this.state.id === hotel.hotelId ? '' : 'hidden'}`}></div>
          <div className={`modal-background position-absolute w-100 ${this.state.id === hotel.hotelId ? '' : 'hidden'}`}>
            <div className='modal-container w-50 rounded text-align-center col-2'>
              <h5 className='color-white mt-5 mb-5 fs-5'>{`Are you sure you want to delete ${hotel.name} ?`}</h5>
            <div className="row">
                  <div className="w-50 col-4">
                <button className='cancel rounded fs-5' onClick={this.handleCancel}>cancel</button>
              </div>
                  <div className="w-50 col-4">
                <button className='confirm rounded fs-5' onClick={this.handleConfirm}>confirm</button>
              </div>
            </div>
            </div>
          </div>
            <div className="mt-5 border-style box-shadow position-relative" key={hotel.hotelId}>
              <div className="row image-padding">
                <div className="img-container w-50 background-image custom-border" style={{ backgroundImage: `url(${hotel.photoUrl})` }}>
                </div>
                <div className='title-container w-50  mb-5 row'>
                  <div className='mb-5 mt-2'>
                    <a href={`#editPage?hotelId=${hotel.hotelId}`} className='position-absolute end-0 fs-4 light-purple'><i className='fas fa-edit'></i></a>
                    <button className='position-absolute button' onClick={this.handleOnClick}><i className='fas fa-trash' id={hotel.hotelId}></i></button>
                  </div>
                  <h3 className="color-white fs-5">{hotel.name}</h3>
                  <div className="column-half">
                    <p>{`${hotel.line1}, ${hotel.city}, ${hotel.state}, ${hotel.zipCode}`}<br></br>
                      {`${hotel.phoneNumber}`}</p>
                  </div>
                  <div className='description column-half'>
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
