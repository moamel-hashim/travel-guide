import React from 'react';
import Header from '../component/header';
import DarkBackground from '../component/dark-background';
import NewHotel from '../component/new-hotel';
import MainPageHeader from '../component/MainPageNav';
export default class AddHotel extends React.Component {
  render() {
    return (
      <DarkBackground>
        <Header />
        <div className="container">
        <MainPageHeader />
        </div>
        <NewHotel />
      </DarkBackground>
    );
  }
}
