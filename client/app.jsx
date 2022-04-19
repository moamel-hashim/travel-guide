import React from 'react';
import Home from './pages/Home';
import { parseRoute } from './lib';
import MainPage from './pages/SecondPage';

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
  }

  getHotels(search) {
    fetch(`/api/yelp?search=${search}`)
      .then(res => res.json())
      .then(data => {
        console.log('value of data in the App:', data);
        this.setState({ hotelsData: data });
      });
  }

  render() {
    console.log('value of hotels data in the app render:', this.state.hotelsData);
    return (
      <>
      { this.renderPage() }
      </>
    );
  }
}
