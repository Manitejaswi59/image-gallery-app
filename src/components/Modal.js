import React from 'react';

const Modal = ({ image, closeModal, nextImage, prevImage }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
         <img src={image.src} alt={image.alt} />
        <div className="caption">
          <button onClick={prevImage}>&#10094;</button>
          <button onClick={nextImage}>&#10095;</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;