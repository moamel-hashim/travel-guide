import React from 'react';
import Header from '../component/header';
import SearchBar from '../component/SearchBar';
import images from '../lib/images';

export default function Home(props) {
  return (
    <>
    <div className='full-width' style={{ backgroundImage: `url(${images[0]})` }}>
      <Header/>
      <SearchBar />
    </div>
    </>
  );
}
