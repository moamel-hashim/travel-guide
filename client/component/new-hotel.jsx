import React from 'react';

export default class NewHotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelName: '',
      streetAddress: '',
      city: '',
      state: '',
      phoneNumber: '',
      imageUrl: '/images/placeholder-image-square.jpg'
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    location.hash = '#newHotelPage';
  }

  onFileChange(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = event => this.setState({ imageUrl: event.target.result });
    reader.readAsDataURL(file);
    this.setState({ file });
  }

  render() {
    console.log('value of this.state in new hotel:', this.state);
    return (
      <>
      <div className="custom-container mt-5 container-design">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="w-50 pt-4">
              <img src={this.state.imageUrl} alt="" className='rounded'/>
            </div>
            <div className='input-container w-50 mt-4'>
              <label htmlFor="hotel-name" className='color-white fs-5'>Hotel Name</label>
              <div>
                <input type="text" name='hotelName' id='hotel-name' className='w-100 mt-3 mb-3 input-design p-2 rounded' placeholder='Enter a hotel name' required onChange={this.handleChange} value={this.state.hotelName}/>
              </div>
              <label htmlFor="street-address" className='color-white fs-5'>Street address</label>
              <div>
                <input type="text" name='streetAddress' id='street-address' className='w-100 mt-3 mb-3 input-design p-2 rounded' placeholder='Address' required onChange={this.handleChange} value={this.state.streetAddress}/>
              </div>
              <label htmlFor="city" className='w-50 color-white fs-5'>City</label>
              <label htmlFor="state" className='w-50 color-white fs-5'>State</label>
              <div className='row'>
                <input type="text" name='city' id='city' className='w-50 mt-3 mb-3 p-2 input-design-city' placeholder='city' required onChange={this.handleChange} value={this.state.city}/>
                <input type="text" name='state' id='state' className='w-50 mt-3 mb-3 p-2 input-design-state' placeholder='state' required onChange={this.handleChange} value={this.state.state}/>
              </div>
              <label htmlFor="phone" className='color-white fs-5'>Phone number</label>
              <div>
                <input type="tel" name='phoneNumber' id='phone' className='w-100 mt-3 mb-3 input-design p-2 rounded' placeholder='(666) 666-666' onChange={this.handleChange} value={this.state.phoneNumber}/>
              </div>
            </div>
              <div className="row flex-row-reverse align-items-center">
                <div className='button-container text-end w-50'>
                  <button type='submit' className='submit-button mt-3 mb-3'>Submit</button>
                </div>
                <div className='w-50 text-center'>
                  <label htmlFor="file" className='file-upload'><i className='fas fa-upload'></i></label>
                  <input type="file" id="file" className='hidden' required onChange={this.onFileChange} accept='image/*'/>
                </div>
              </div>
          </div>
        </form>
      </div>
    </>
    );
  }
}
