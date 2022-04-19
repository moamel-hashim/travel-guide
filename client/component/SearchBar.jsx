import React from 'react';
// import MainPage from '../pages/SecondPage';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    console.log('the value of this.props:', this.props);
    this.state = { search: '', routing: location.hash };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('the value of this.props inside of the handleSubmit function', this.props);
    this.props.getHotels(this.state.search);
    this.setState({ routing: location.hash = '#mainPage' });
  }

  render() {
    return (
      <div className='container text-align-center'>
      <div className="row center-search-bar">
      <form onSubmit={this.handleSubmit}>
      <input type="search" className='search shadow p-3 mb-5' placeholder='Where to ?' onChange={this.handleSearch} value={this.state.search}/>
      <button className='color-white span-position search-button' type='submit'><i className='fa-solid fa-search'></i></button>
      </form>
      </div>
      </div>
    );
  }
}
