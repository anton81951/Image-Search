import React from 'react';
import styles from './ImageCard.module.css';

interface ImageCardProps {
  imageUrl: string;
  altText: string;
  likes: number;
  author: string;
  onImageClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  altText,
  likes,
  author,
  onImageClick,
}) => {
  return (
    <div className={styles.cardContainer} onClick={onImageClick}>
      <img className={styles.cardFrame} src={imageUrl} alt={altText} />
      <div className={styles.cardInfo}>
        <p>Likes: {likes}</p>
        <p>Author: {author}</p>
      </div>
    </div>
  );
};

export default ImageCard;