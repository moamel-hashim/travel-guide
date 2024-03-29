
import React from 'react';

export default class HotelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelName: '',
      streetAddress: '',
      city: '',
      state: '',
      phoneNumber: '',
      imageUrl: '/images/placeholder-image-square.jpg',
      zipCode: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInputRef = React.createRef();
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  onFileChange(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = event => this.setState({ imageUrl: event.target.result });
    reader.readAsDataURL(file);
    this.setState({ file });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addHotel();
  }

  addHotel() {
    const formData = new FormData();
    formData.append('streetAddress', this.state.streetAddress);
    formData.append('city', this.state.city);
    formData.append('state', this.state.state);
    formData.append('phoneNumber', this.state.phoneNumber);
    formData.append('hotelName', this.state.hotelName);
    formData.append('zipCode', this.state.zipCode);
    formData.append('description', this.state.description);
    formData.append('image', this.fileInputRef.current.files[0]);
    fetch('/api/travelGuide', {
      method: 'POST',
      body: formData
    })
      .then(() => {
        location.hash = `#newHotelPage?=${this.props.search}`;
      });
  }

  render() {
    return (
      <>
        <div className="custom-container mt-5 container-design">
          <h3 className='color-white text-end'>Add a Hotel</h3>
          <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
            <div className="row">
              <div className="w-50 pt-4">
                <img src={this.state.imageUrl} alt="" className='rounded' />
                <div className="row  align-items-center mb-3 mt-3">
                  <div className=' ms-3'>
                    <label htmlFor="file" className='file-upload pointer'><i className='fas fa-upload'></i></label>
                    <input type="file" id="file" className='hidden' name='image'
                      required
                      onChange={this.onFileChange} accept='image/*' ref={this.fileInputRef} />
                  </div>
                </div>
              </div>
              <div className='input-container w-50 mt-4'>
                <label htmlFor="hotel-name" className='color-white fs-5'>Hotel Name</label>
                <div>
                  <input type="text" name='hotelName' id='hotel-name' className='w-100 mt-3 mb-3 input-design p-2 rounded' placeholder='Enter a hotel name'
                    required
                    onChange={this.handleChange} value={this.state.hotelName} />
                </div>
                <label htmlFor="street-address" className='color-white fs-5'>Street address</label>
                <div>
                  <input type="text" name='streetAddress' id='street-address' className='w-100 mt-3 mb-3 input-design p-2 rounded' placeholder='Address'
                    required
                    onChange={this.handleChange} value={this.state.streetAddress} />
                </div>
                <label htmlFor="city" className='w-25 color-white fs-5'>City</label>
                <div className='row ms-1 justify-content-between'>
                  <input type="text" name='city' id='city' className=' mt-3 mb-3 p-2 input-design-city' placeholder='city'
                    required
                    onChange={this.handleChange} value={this.state.city} />
                  <div className="width-fit-content p-0 half">
                    <label htmlFor="state" className='color-white fs-5'>State</label>
                  </div>
                  <div className=' width-fit-content p-0 half'>
                    <label htmlFor="zip-code" className='color-white fs-5'>Zip code</label>
                  </div>
                  <input type="text" name='state' id='state' className=' half mt-3 mb-3 p-2 input-design-state' placeholder='state'
                    required
                    onChange={this.handleChange} value={this.state.state} />
                  <input type="text" name='zipCode' id='zip-code' className=' half mb-3 p-2 input-design-zip mt-3' placeholder='zip code'
                    required
                    onChange={this.handleChange} value={this.state.zipCode} />
                </div>
                <label htmlFor="phone" className='color-white fs-5'>Phone number</label>
                <div>
                  <input type="tel" name='phoneNumber' id='phone' className='w-100 mt-3 mb-3 input-design p-2 rounded' placeholder='(666) 666-666' onChange={this.handleChange} value={this.state.phoneNumber}
                    required
                  />
                </div>
              </div>
              <div className='w-100'>
                <textarea name="description" id="description" cols="30" rows="10" className='w-100 input-design rounded p-2' placeholder='description' onChange={this.handleChange} value={this.state.description}></textarea>
              </div>
              <div className='button-container text-end w-100'>
                <button type='submit' className='submit-button mt-3 mb-3'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
