import React from 'react';
import images from '../lib/images';
import Header from '../component/header';
import SearchBar from '../component/SearchBar';

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
