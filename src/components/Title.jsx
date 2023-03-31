import React from 'react';
import styles from '../styles/Title.module.css';

const Title = ({ firstName }) => {
  return (
    <section className={styles.title}>
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
};

export default Title;
