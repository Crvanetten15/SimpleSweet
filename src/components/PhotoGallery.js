import React from 'react';
import './PhotoGallery.css'

import image1 from '../images/stock2.jpg';
import image2 from '../images/stock2.jpg';
import image3 from '../images/stock3.jpg';
import image4 from '../images/stock4.jpg';
import image5 from '../images/stock5.jpg';
import image6 from '../images/stock6.jpg';


const PhotoGallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-item">
        <img src={image1} alt="Photo 1" />
      </div>
      <div className="gallery-item">
        <img src={image2} alt="Photo 2" />
      </div>
      <div className="gallery-item">
        <img src={image3} alt="Photo 3" />
      </div>
      <div className="gallery-item">
        <img src={image4} alt="Photo 4" />
      </div>
      <div className="gallery-item">
        <img src={image5} alt="Photo 5" />
      </div>
      <div className="gallery-item">
        <img src={image6} alt="Photo 6" />
      </div>
    </div>
  );
};

export default PhotoGallery;
