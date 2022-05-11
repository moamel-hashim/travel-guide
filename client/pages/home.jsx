import React from 'react';
import Header from '../component/header';
import SearchBar from '../component/SearchBar';
import images from '../lib/images';

export default function Home(props) {
  return (
    <>
      <div className='full-width over-flow' style={{ backgroundImage: `url(${images[0]})` }}>
        <Header />
        <SearchBar getHotels={props.getHotels} />
      </div>
    </>
  );
}
