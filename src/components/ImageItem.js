import React from 'react';

const ImageItem = ({ image, openModal }) => {
  return (
    <div className="image-item" onClick={() => openModal(image)}>
      <img src={image.src} alt="image.alt" />
    </div>
  );
};

export default ImageItem;