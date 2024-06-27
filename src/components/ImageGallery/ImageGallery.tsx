import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import { Picture } from '../../pictures-api';
import styles from './ImageGallery.module.css';

interface ImageGalleryProps {
  pictures: Picture[];
  onLoadMore: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ pictures, onLoadMore }) => {
  return (
    <ul className={styles.galleryShape}>
      {pictures.map((picture) => (
        <li key={picture.id}>
          <ImageCard
            author={picture.user.username}
            likes={picture.likes}
            imageUrl={picture.urls.small}
            altText={picture.alt_description}
            onImageClick={() => {}}
          />
        </li>
      ))}
      <button onClick={onLoadMore}>Load More</button>
    </ul>
  );
};

export default ImageGallery;