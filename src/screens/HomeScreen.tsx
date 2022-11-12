import React from 'react';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import image from '../img/image.jpeg';
function HomeScreen() {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '700px',
        backgroundSize: '100% 100%',
      }}
    >
      <NavBar />
      <SearchBar />
    </div>
  );
}

export default HomeScreen;
