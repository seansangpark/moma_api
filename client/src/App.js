import React from 'react';
import Artwork from './Artwork';

import './App.css';

function App() {
  const artworkData = {
    title: 'Starry Night',
    artist: 'Vincent van Gogh',
    year: 1889,
    imageUrl:
      'https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg', // Replace with the actual URL
  };

  return (
    <div className='App'>
      <Artwork {...artworkData} />
    </div>
  );
}

export default App;
