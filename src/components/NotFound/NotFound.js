import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '..';
import styles from './styles.module.css';

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorWrapper}>
        <span className={styles.codeError}>404</span>
        <span className={styles.textError}>Page not found</span>
        <Link to="/React-course-work"><Button type="homeButton">Home</Button></Link>
      </div>
    </div>
  );
};
