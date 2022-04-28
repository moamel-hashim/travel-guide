import React from 'react';
import Header from '../component/header';
import DarkBackground from '../component/dark-background';
import MainPageHeader from '../component/MainPageNav';
export default class EditPage extends React.Component {
  render() {
    return (
      <DarkBackground>
        <Header />
        <div className="container">
          <MainPageHeader search={this.props.search}/>
        </div>
      </DarkBackground>
    );
  }
}
