import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import { motion } from framer-motion;
import ImageGallery from "../components/ImageGallery";


function Gallery() {

  return (
  <div id="gallery">
    <ImageGallery />
  </div>
  );

}

export default Gallery;
