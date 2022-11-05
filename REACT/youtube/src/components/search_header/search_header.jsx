import styles from './search_header.module.css';
import React, { useRef } from 'react';

const SearchHeader = ({onSearch}) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const data = inputRef.current.value;
    onSearch(data)
    console.log(data);
  }
  const onClick = () => {
    handleSearch();
  };
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img  className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input 
        ref = {inputRef}
        className={styles.input} 
        placeholder="Search..." 
        onKeyPress={onKeyDown}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.buttonimg} src="/images/search.png" alt="search" />
      </button>
        
    </header>
  );
}

export default SearchHeader;