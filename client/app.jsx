import React from 'react';
import Home from './pages/Home';
import { parseRoute } from './lib';
import MainPage from './pages/main-page';
import AddHotel from './pages/add-hotel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { route: parseRoute(window.location.hash), hotelsData: [] };
    this.getHotels = this.getHotels.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const route = parseRoute(window.location.hash);
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
      console.log('value of search in app:', search);
      return <MainPage hotels={this.state.hotelsData}
                        search={search}
                        getHotels={this.getHotels}/>;
    }
    if (route.path === 'addHotel') {
      return <AddHotel />;
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
