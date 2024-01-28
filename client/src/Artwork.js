import './Artwork.css'
import React, { useState, useEffect } from "react";

const ArtworkDisplay = () => {
  const [data, setData] = useState(null);

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
  console.log(data)
  return (
    <div>
      {data && (
        <div className='artwork'>
          <img
            src={data.primaryImage}
            alt={data.title}
          />
          {data.title === "" ? <h1>Artwork Name: Unknown</h1> : <h1>Artwork Name: {data.title}</h1>}
          {data.artistDisplayName == "" ? <h2>Artist Name: Unknown</h2> : <h2>Artist Name: {data.artistDisplayName
}</h2>}
{data.objectEndDate == "" ? <h2>Year Completed: Unknown</h2> : <h2>Year Completed: {data.objectEndDate}</h2>}
        </div>
      )}
    </div>
  );
};

export default ArtworkDisplay;
