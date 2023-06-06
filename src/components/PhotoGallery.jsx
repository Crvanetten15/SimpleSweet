import React from "react";
import Masonry from "react-masonry-css";

const PhotoGallery = ({ images }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="gallery"
      columnClassName="gallery-item"
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} className="gallery-image" />
        </div>
      ))}
    </Masonry>
  );
};

export default PhotoGallery;
