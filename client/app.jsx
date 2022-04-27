import React from 'react';
import Home from './pages/Home';
import { parseRoute } from './lib';
import MainPage from './pages/main-page';
import AddHotel from './pages/add-hotel';
import NewHotel from './pages/new-hotel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { route: parseRoute(window.location.hash), hotelsData: [], addedHotels: [], search: null };
    this.getHotels = this.getHotels.bind(this);
    this.getAddedHotel = this.getAddedHotel.bind(this);
    this.getAddedHotel();
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const route = parseRoute(window.location.hash);
      const search = route.params.get('search');
      if (search) {
        this.setState({ search });
      }
      this.setState({ route });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'mainPage') {
      return <MainPage hotels={this.state.hotelsData}
                        search={this.state.search}
                        getHotels={this.getHotels}/>;
    }
    if (route.path === 'addHotel') {
      return <AddHotel search={this.state.search}/>;
    }
    if (route.path === 'newHotelPage') {
      return <NewHotel addedHotels={this.state.addedHotels}
                        search={this.state.search}/>;
    }
  }

  getHotels(search) {
    fetch(`/api/yelp?search=${search}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ hotelsData: data });
      });
  }

  getAddedHotel() {
    fetch('/api/travelGuide')
      .then(res => res.json())
      .then(data => {
        this.setState({ addedHotels: data });
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
