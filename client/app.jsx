import React from 'react';
import Home from './pages/home';
import { parseRoute } from './lib';
import MainPage from './pages/main-page';
import AddHotel from './pages/add-hotel';
import NewHotel from './pages/new-hotel';
import EditPage from './pages/edit-page';
import ErrorHandling from './pages/error-handling';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    const route = parseRoute(window.location.hash);
    const search = route.params.get('search');
    const hotelId = route.params.get('hotelId');
    this.state = { route: route, hotelsData: [], addedHotels: [], search: search || null, hotelId, isLoading: false, isError: false };
    this.getHotels = this.getHotels.bind(this);
    this.getAddedHotel = this.getAddedHotel.bind(this);
    this.resetError = this.resetError.bind(this);
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
    const { route, isError, isLoading } = this.state;
    if (isError) {
      return <ErrorHandling isError={isError}
                            resetError={this.resetError}/>;
    }
    if (route.path === '') {
      return (
        <Home
          isError={isError}
          resetError={this.resetError}
        />
      );
    }
    if (route.path === 'addHotel') {
      return <AddHotel search={this.state.search} />;
    }
    if (route.path === 'newHotelPage') {
      return (
        <>
          <NewHotel
            addedHotels={this.state.addedHotels}
            search={this.state.search}
            route={route.path}
            getAddedHotel={this.getAddedHotel}
          />
        </>
      );
    }
    if (route.path === 'editPage') {
      const hotelId = route.params.get('hotelId');
      return (
        <EditPage
          search={this.state.search}
          route={hotelId}
          hotelId={hotelId}
        />
      );
    }
    if (route.path === 'mainPage' && this.state.hotelsData) {
      const search = route.params.get('search');
      return (
        <>
          <MainPage
            hotels={this.state.hotelsData}
            search={search}
            getHotels={this.getHotels}
            route={route.path}
            isLoading={isLoading}
          />
        </>
      );
    }
    return <ErrorHandling />;
  }

  resetError() {
    const route = parseRoute(window.location.hash);
    const search = route.params.get('search');
    const hotelId = route.params.get('hotelId');
    this.setState({ route: route, hotelsData: [], addedHotels: [], search: search || null, hotelId, isLoading: false, isError: false });
  }

  getHotels(search) {
    this.setState({ isLoading: true, isError: false });

    const timeoutDuration = 2000;

    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Timeout')), timeoutDuration);
    });

    Promise.race([
      fetch(`/api/yelp?search=${search}`),
      timeoutPromise
    ])
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error('Error occurred while fetching data');
        }
      })
      .then(data => {
        this.setState({
          hotelsData: data,
          isLoading: false,
          isError: false
        });
      })
      .catch(error => {
        if (error.message === 'Timeout') {
          this.setState({
            isLoading: false,
            hotelsData: [],
            isError: true
          });
        } else {
          this.setState({
            isLoading: false,
            hotelsData: [],
            isError: true
          });
        }
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
