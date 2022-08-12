import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import mapImage from '../../../assets/images/map.png';

const images = [
  {
    original: mapImage,
    thumbnail: mapImage,
    loading: 'lazy',
    thumbnailLoading: 'lazy'
  }
];

const MapPage = () => {
  return <ImageGallery items={images} showPlayButton={false} showIndex={true} showThumbnails={false} />;
};

export default MapPage;
