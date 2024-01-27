import React from 'react';

const Artwork = (props) => {
  return (
    <div className='artwork'>
      <img
        src={props.imageUrl}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <h2>By {props.artist}</h2>
      <h2>completed {props.year}</h2>
    </div>
  );
};

export default Artwork;
