import React from 'react';
import ImageGallery from 'react-image-gallery';
import './react-image-gallery/css/image-gallery.css'; // band-aid fix for deployment - otherwise need to figure out how craco picks up css files in node_modules!!
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
  return (
    <div style={{ paddingBottom: '50px' }}>
      <ImageGallery items={images} showPlayButton={false} showIndex={true} showThumbnails={false} />
    </div>
  );
};

export default MapPage;
