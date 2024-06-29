import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (topic: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim() === '') {
      alert('Please enter something to search');
      return;
    }
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <form className={styles.formWrap} onSubmit={handleSubmit}>
      <button className={styles.searchBtn} type="submit">
        <FaSearch className={styles.search} />
      </button>
      <input
        className={styles.inputStyle}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;