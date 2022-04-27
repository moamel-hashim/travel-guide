import React from 'react';
import Header from '../component/header';
import Hotels from '../component/hotels';
import MainPageHeader from '../component/MainPageNav';
import DarkBackground from '../component/dark-background';
import AddHotelButton from '../component/add-hotel-button';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  componentDidMount() {
    this.props.getHotels(this.props.search);
  }

  render() {
    return (
      <DarkBackground>
        <Header />
        <div className="container">
          <MainPageHeader search={this.props.search}/>
        <ul className='pb-4'>
          <li>
            <AddHotelButton />
            <Hotels hotels={this.props.hotels}/>
          </li>
        </ul>
        </div>
      </DarkBackground>
    );
  }
}
