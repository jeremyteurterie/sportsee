import React from 'react';
import styles from '../styles/Title.module.css';

const Title = ({ firstName }) => {
  return (
    <section>
      <h1 className={styles.title}>
        Bonjour <span className={styles.firstnametitle}>{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
};

export default Title;
