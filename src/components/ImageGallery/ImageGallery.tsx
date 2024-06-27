import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import { Picture } from '../../pictures-api';
import styles from './ImageGallery.module.css';

interface ImageGalleryProps {
  pictures: Picture[];
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ pictures, onImageClick }) => {
  return (
    <ul className={styles.galleryShape}>
      {pictures.map((picture) => (
        <li key={picture.id}>
          <ImageCard
            author={picture.user.username}
            likes={picture.likes}
            imageUrl={picture.urls.regular}
            altText={picture.alt_description}
            onImageClick={() => onImageClick(picture.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;