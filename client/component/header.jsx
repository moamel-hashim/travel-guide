import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleTravelGuideClick = this.handleTravelGuideClick.bind(this);
  }

  handleTravelGuideClick() {
    window.location.hash = '';
    this.props.resetError();
  }

  render() {
    return (
      <div className="container position-sticky">
        <header className='mt-4 p-3'>
          <a href="#" className='color-white header font-size' onClick={this.handleTravelGuideClick}>
            Travel Guide
          </a>
        </header>
      </div>
    );
  }
}
