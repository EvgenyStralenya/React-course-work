import React from 'react';
import styles from './styles.module.css';

export const Button = ({
  children, onClick, typeButton, isActive,
}) => {
  function getButtonStyle() {
    let style;
    switch (typeButton) {
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
    return style;
  }

  function getClassNames() {
    return `${styles.button} ${getButtonStyle()} ${isActive ? styles.activeButton : ''}`;
  }

  return (
    <button type={(typeButton === 'searchButton') ? 'submit' : 'button'} className={getClassNames()} onClick={onClick}>
      {children}
    </button>
  );
};
