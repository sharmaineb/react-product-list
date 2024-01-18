import React from "react";
import './styles.css';

function CategoryButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={`CategoryButton ${props.active ? 'selected' : ''}`}
    >
      {props.label}
    </button>
  );
}

export default CategoryButton;
