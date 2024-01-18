import React from 'react';
import './styles.css';

function CategoryButton({ label, onClick, isSelected }) {
  return (
    <button className={`CategoryButton ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default CategoryButton;

