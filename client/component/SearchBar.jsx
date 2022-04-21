import React from 'react';
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    location.hash = `#mainPage?search=${this.state.search}`;
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
