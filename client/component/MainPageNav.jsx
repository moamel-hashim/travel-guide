import React from 'react';

export default class MainPageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: this.props.search };
  }

  render() {
    return (
      <div className='row'>
        <div className='mt-5 hotel-div w-50 p-4 custom-border text-center'>
          <a className='a w-50 text-center' href={`#mainPage?search=${this.state.search}`}><i className='fas fa-hotel pe-2'></i> Yelp Hotels</a>
        </div>
        <div className='mt-5 hotel-div w-50 p-4 custom-border-right text-center'>
          <a href="#newHotelPage" className='w-50 a text-center'> My Hotels</a>
        </div>
      </div>
    );
  }
}
