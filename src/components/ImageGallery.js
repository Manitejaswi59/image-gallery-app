import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';

const images = [
    { id: 1, src: '/images/1.jpg', alt: 'Image 1' },
    { id: 2, src: '/images/2.jpg', alt: 'Image 2' },
    { id: 3, src: '/images/3.jpg', alt: 'Image 3' },
    { id: 4, src: '/images/4.jpg', alt: 'Image 4' },
    { id: 5, src: '/images/5.jpg', alt: 'Image 5' },
    { id: 6, src: '/images/6.jpg', alt: 'Image 6' },
    { id: 7, src: '/images/7.jpg', alt: 'Image 7' },
    { id: 8, src: '/images/8.jpg', alt: 'Image 8' },
    { id: 9, src: '/images/9.jpg', alt: 'Image 9' },
    { id: 10, src: '/images/10.jpg', alt: 'Image 10' },
    { id: 11, src: '/images/11.jpg', alt: 'Image 11' },
    { id: 12, src: '/images/12.jpg', alt: 'Image 12' },
    { id: 13, src: '/images/13.jpg', alt: 'Image 13' },
    { id: 14, src: '/images/14.jpg', alt: 'Image 14' },
    { id: 15, src: '/images/15.jpg', alt: 'Image 15' },
   
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setCurrentIndex(images.indexOf(image));
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="image-gallery">
      {images.map((images) => (
        <ImageItem key={images} image={images} openModal={openModal} />
      ))}
      {selectedImage && (
        <Modal
          image={selectedImage}
          closeModal={closeModal}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;
