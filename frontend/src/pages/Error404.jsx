import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Error404.module.css';

/**
 * React component that renders the 404 error page.
 * @returns {JSX.Element} The 404 error page.
 */
const Error404 = () => {
  return (
    <section id={styles.error404}>
      <h1>404 Page Not Found</h1>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </section>
  );
};

export default Error404;
