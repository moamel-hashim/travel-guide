import React from 'react';
import Header from '../component/header';
import Hotels from '../component/hotels';
import MainPageHeader from '../component/MainPageNav';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    console.log('value of this.props in the secondPage:', this.props);
  }

  render() {
    return (
      <div className='full-width over-flow-x' style={{ backgroundColor: '#36393F' }}>
        <Header />
        <div className="container">
        <MainPageHeader />
        <ul>
          <li>
            <Hotels hotels={this.props.hotels}/>
          </li>
        </ul>
        </div>
      </div>
    );
  }
}
