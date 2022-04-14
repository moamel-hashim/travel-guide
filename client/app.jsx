import React from 'react';
import Home from './pages/home';
import { parseRoute } from './lib';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { route: parseRoute(location.hash) };
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
      return <Home />;
    }
  }

  render() {
    return <Home />;
  }
}
