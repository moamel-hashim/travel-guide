import React from 'react';
import Header from '../component/header';
import DarkBackground from '../component/dark-background';
import FormHotel from '../component/add-hotel-form';
import MainPageHeader from '../component/MainPageNav';
export default class AddHotel extends React.Component {
  render() {
    return (
      <DarkBackground>
        <Header />
        <div className="container">
          <MainPageHeader search={this.props.search}/>
        </div>
        <FormHotel />
      </DarkBackground>
    );
  }
}
