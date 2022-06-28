import React from 'react';
import Header from '../component/header';
import Hotels from '../component/hotel';
import MainPageHeader from '../component/main-page-nav';
import DarkBackground from '../component/dark-background';
import AddHotelButton from '../component/add-hotel-button';
import Lottie from 'react-lottie';
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
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: loader.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <>
      {this.props.isLoading === true
        ? (
          <Lottie options={defaultOptions}
            height={window.innerHeight}
            width={window.innerWidth}
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused} />
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
