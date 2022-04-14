import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className='container text-align-center'>
      <div className="row center-search-bar">
      <form action="">
      <input type="search" className='search shadow p-3 mb-5' placeholder='Where to ?'/>
      <button className='color-white span-position search-button' type='submit'><i className='fa-solid fa-search'></i></button>
      </form>
      </div>
      </div>
    );
  }
}
