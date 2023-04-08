import React from 'react';
import styles from '../styles/Title.module.css';

/**
 * Renders a title component with a greeting and congratulations message.
 * @param {string} firstName - The first name of the user to be displayed in the title.
 * @returns {JSX.Element} - The rendered Title component.
 */
const Title = ({ firstName }) => {
  return (
    <section className={styles.title}>
      <h1>
        Bonjour <span className={styles.firstnametitle}>{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
};

export default Title;
