import React from 'react';
import styles from './styles.module.css';

export const Button = ({
  children, onClick, type, isActive,
}) => {
  let style;
  switch (type) {
    case 'searchOptionsButton':
      style = styles.searchOptionsButton;
      break;
    case 'sortOptionsButton':
      style = styles.sortOptionsButton;
      break;
    case 'searchButton':
      style = styles.searchButton;
      break;
    case 'closeModalButton':
      style = styles.closeModalButton;
      break;
    case 'homeButton':
      style = styles.homeButton;
      break;
    default:
      style = styles.button;
  }

  function getClassNames() {
    return `${styles.button} ${style} ${isActive ? styles.activeButton : ''}`;
  }

  return (
    <button type="button" className={getClassNames()} onClick={onClick}>
      {children}
    </button>
  );
};
