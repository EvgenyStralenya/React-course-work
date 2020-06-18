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
    default:
      style = styles.button;
  }

  function getClassNames() {
    return `${styles.button} ${style} ${isActive === true ? styles.activeButton : ''}`;
  }

  return (
    <div className={getClassNames()} onClick={onClick}>
      {children}
    </div>
  );
};
