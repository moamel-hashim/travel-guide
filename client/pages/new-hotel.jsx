import React from 'react';
import DarkBackground from '../component/dark-background';
import Header from '../component/header';
import MainPageHeader from '../component/MainPageNav';
import CreatedHotel from '../component/created-hotel';
import AddHotelButton from '../component/add-hotel-button';

export default class NewHotel extends React.Component {
  render() {
    return (
      <DarkBackground>
        <Header />
        <div className='container'>
          <MainPageHeader search={this.props.search}/>
            <ul className='p-4'>
              <li>
                <AddHotelButton />
                <CreatedHotel addedHotels={this.props.addedHotels}/>
              </li>
            </ul>
        </div>
      </DarkBackground>
    );
  }
}
