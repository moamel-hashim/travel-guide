import React from 'react';
import Home from './pages/Home';
import { parseRoute } from './lib';
import MainPage from './pages/main-page';
import AddHotel from './pages/add-hotel';
import NewHotel from './pages/new-hotel';
import EditPage from './pages/edit-page';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    const route = parseRoute(window.location.hash);
    const search = route.params.get('search');
    const hotelId = route.params.get('hotelId');
    this.state = { route: route, hotelsData: [], addedHotels: [], search: search || null, hotelId, isLoading: false };
    this.getHotels = this.getHotels.bind(this);
    this.getAddedHotel = this.getAddedHotel.bind(this);
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
      const search = route.params.get('search');
      return (
        <>
          <MainPage hotels={this.state.hotelsData}
            search={search}
            getHotels={this.getHotels}
            route={route.path}
            isLoading={this.state.isLoading}/>
        </>
      );
    }
    if (route.path === 'addHotel') {
      return <AddHotel search={this.state.search} />;
    }
    if (route.path === 'newHotelPage') {
      return (
        <>
          <NewHotel addedHotels={this.state.addedHotels}
            search={this.state.search}
            route={route.path}
            getAddedHotel={this.getAddedHotel} />
        </>
      );
    }

    if (route.path === 'editPage') {
      const hotelId = route.params.get('hotelId');
      return <EditPage search={this.state.search}
        route={hotelId}
        hotelId={hotelId} />;
    }
  }

  getHotels(search) {
    this.setState({ isLoading: true });
    fetch(`/api/yelp?search=${search}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          hotelsData: data,
          isLoading: false
        });
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
          {this.renderPage()}
      </>
    );
  }
}
