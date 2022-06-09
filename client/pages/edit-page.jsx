import React from 'react';
import Header from '../component/header';
import DarkBackground from '../component/dark-background';
import MainPageHeader from '../component/main-page-nav';
import EditHotelForm from '../component/edit-hotel-form';
export default class EditPage extends React.Component {
  render() {
    return (
      <DarkBackground>
        <Header />
        <div className="container">
          <MainPageHeader search={this.props.search} />
        </div>
        <EditHotelForm hotelId={this.props.hotelId}
                        search={this.props.search}/>
      </DarkBackground>
    );
  }
}
