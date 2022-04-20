import React from 'react';
import Header from '../component/header';
import Hotels from '../component/hotels';
import MainPageHeader from '../component/MainPageNav';
import DarkBackground from '../component/dark-background';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  render() {
    return (
      <DarkBackground>
        <Header />
        <div className="container">
        <MainPageHeader />
        <ul className='pb-4'>
          <li>
            <Hotels hotels={this.props.hotels}/>
          </li>
        </ul>
        </div>
      </DarkBackground>
    );
  }
}
