import './Artwork.css'
import React, { useState, useEffect } from "react";

const ImageRequest = () => {
  const [priceData, setData] = useState(null);

  useEffect(() => {
    // Initial fetch when the component mounts
    fetchImage();

    // Set up interval to fetch every 5 seconds
    const intervalId = setInterval(() => {
      fetchImage();
    }, 5000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  

  const fetchImage = () => {
    let randomNumber = Math.floor(Math.random() * 80000);
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(randomNumber);
        if (
          data.message !== "ObjectID not found" &&
          data.isPublicDomain === true &&
          data.primaryImage.includes("http") &&
          data.imageUrl !== null
        ) {
          
          setData(data);
        } else {
          fetchImage();
        }
      });
  };
  console.log(priceData)
  return (
    <div>
      {priceData && (
        <div className='artwork'>
          <img
            src={priceData.primaryImage}
            alt={priceData.title}
          />
          <h1>{priceData.title}</h1>
          <h2>By {priceData.artistDisplayName
}</h2>
          <h2>Completed {priceData.year}</h2>
        </div>
      )}
    </div>
  );
};

export default ImageRequest;
