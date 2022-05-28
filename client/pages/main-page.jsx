import React from 'react';
import Header from '../component/header';
import Hotels from '../component/hotel';
import MainPageHeader from '../component/main-page-nav';
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
          <MainPageHeader search={this.props.search}
                          route={this.props.route}/>
        <ul className='p-0'>
          <li>
            <AddHotelButton search={this.props.search}/>
            <Hotels hotels={this.props.hotels}/>
          </li>
        </ul>
        </div>
      </DarkBackground>
    );
  }
}
