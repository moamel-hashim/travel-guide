import React from 'react';

export default class MainPageHeader extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='mt-5 hotel-div w-50 p-4 custom-border text-center'>
          <a className='a w-50 text-center'><i className='fas fa-hotel pe-2'></i> Hotel</a>
        </div>
        <div className='mt-5 hotel-div w-50 p-4 custom-border-right text-center'>
          <a href="#" className='w-50 a text-center'><i className='fas fa-plus'></i> New</a>
        </div>
      </div>
    );
  }
}
