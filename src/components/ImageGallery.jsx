import React ,{ Component } from "react";
import { Link } from "react-router-dom";
// import { motion } from framer-motion;
import './ImageGallery.css';


function ImageGallery() {
  return (
  <div id="gallery-main">
    <div className="column">
      <div className = "image-container">
        <img src={require('../images/gallery/photo1.jpg')} alt="" />
      </div>
      <div className = "image-container">
        <img src={require('../images/gallery/IMG_2050.jpg')} alt="" />
      </div>
      <div className = "image-container">
        <img src={require('../images/gallery/IMG_2052.jpg')} alt="" />
      </div>
      <div className = "image-container">
        <img src={require('../images/gallery/IMG_2056.jpg')} alt="" />
      </div>
      <div className = "image-container">
        <img src={require('../images/gallery/IMG_2058.jpg')} alt="" />
      </div>
    </div>
    <div className="column">
      <div className = "image-container">
        <img src={require('../images/gallery/IMG_2062.jpg')} alt="" />
      </div>
      <div className = "image-container">
        <img src={require('../images/gallery/IMG_2063.jpg')} alt="" />
      </div>
      <div className = "image-container">
        <img src={require('../images/gallery/IMG_2064.jpg')} alt="" />
      </div>
      <div className = "image-container">
        <img src={require('../images/gallery/IMG_2065.jpg')} alt="" />
      </div>
      <div className = "image-container">
        <img src={require('../images/gallery/IMG_2066.jpg')} alt="" />
      </div>
    </div>
    <div className="column">
      <div className = "image-container">
          <img src={require('../images/gallery/IMG_2077.jpg')} alt="" />
        </div>
        <div className = "image-container">
          <img src={require('../images/gallery/IMG_2078.jpg')} alt="" />
        </div>
        <div className = "image-container">
          <img src={require('../images/gallery/IMG_2079.jpg')} alt="" />
        </div>
        <div className = "image-container">
          <img src={require('../images/gallery/IMG_2065.jpg')} alt="" />
        </div>
        <div className = "image-container">
          <img src={require('../images/gallery/IMG_2066.jpg')} alt="" />
        </div>
    </div>

  </div>
  );
  
}

export default ImageGallery;
