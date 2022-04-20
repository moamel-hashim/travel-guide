import React from 'react';
import Home from './pages/Home';
import { parseRoute } from './lib';
import MainPage from './pages/SecondPage';
import HotelDetails from './pages/hotel-detail';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { route: parseRoute(location.hash), hotelsData: [] };
    this.getHotels = this.getHotels.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const route = parseRoute(location.hash);
      this.setState({ route });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home getHotels={this.getHotels}/>;
    }
    if (route.path === 'mainPage') {
      return <MainPage hotels={this.state.hotelsData}/>;
    }
    if (route.path === 'hotel-details') {
      return <HotelDetails />;
    }
  }

  getHotels(search) {
    fetch(`/api/yelp?search=${search}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ hotelsData: data });
      });
  }

  render() {
    return (
      <>
      { this.renderPage() }
      </>
    );
  }
}
