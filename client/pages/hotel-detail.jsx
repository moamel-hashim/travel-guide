import React from 'react';
import Header from '../component/header';
import DarkBackground from '../component/dark-background';
import { parseRoute } from '../lib';

export default class HotelDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { details: null, route: parseRoute(window.location.hash) };
  }

  componentDidMount() {
    const { route } = this.state;
    const hotelId = route.params.get('hotelId');
    console.log(hotelId);
    fetch(`/api/yelp?businesses=${hotelId}`)
      // .then(res => console.log(res))
  }

  render() {
    return (
      <DarkBackground>
        <Header/>
      </DarkBackground>
    );
  }
}
