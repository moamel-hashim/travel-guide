import React from 'react';
import Header from '../component/header';
import Hotels from '../component/hotel';
import MainPageHeader from '../component/main-page-nav';
import DarkBackground from '../component/dark-background';
import AddHotelButton from '../component/add-hotel-button';
import Lottie from 'react-lottie-player';
import * as loader from '../src/69023-world-map-blue.json';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '', isLoading: this.props.isLoading };
  }

  componentDidMount() {
    this.props.getHotels(this.props.search);
  }

  render() {
    return (
      <>
      {this.props.isLoading === true
        ? (
          <Lottie
          loop
            animationData={loader}
            play
            style={{ width: window.innerWidth, height: window.innerHeight }}
            />
          )
        : (

      <DarkBackground>
          <Header />
        <div className="container">
          <MainPageHeader search={this.props.search}
                          route={this.props.route}/>
        <ul className='ul-padding'>
          <li>
            <AddHotelButton search={this.props.search}/>
            <Hotels hotels={this.props.hotels}
                    search={this.props.search}/>
          </li>
        </ul>
        </div>
      </DarkBackground>
          )}
      </>
    );

  }
}
