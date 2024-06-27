import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import Loader from './Loader/Loader';
import ImageModal from './ImageModal/ImageModal';
import { fetchPictures, Picture } from '../pictures-api';
import styles from './App.module.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      return;
    }

    const loadPictures = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetchPictures(searchTerm, page);
        setPictures((prevState) => [...prevState, ...response]);
        setShowLoadMoreBtn(response.length > 0);
      } catch (error) {
        setError(true);
        setErrorMessage('Failed to fetch pictures. Please try again.'); 
      } finally {
        setIsLoading(false);
      }
    };

    loadPictures();
  }, [page, searchTerm]);

  const handleSearch = async (topic: string) => {
    setSearchTerm(topic);
    setPage(1);
    setPictures([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <SearchBar onSearch={handleSearch} />
      </header>
      <div className={styles.generalShape}>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={errorMessage || ''} />}
        {pictures.length > 0 && (
          <ImageGallery pictures={pictures} onImageClick={openModal} />
        )}
        {showLoadMoreBtn && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
        <ImageModal
          isOpen={isModalOpen}
          imageUrl={selectedImage}
          altText="Selected Image"
          closeModal={closeModal}
        />
      </div>
    </>
  );
};

export default App;