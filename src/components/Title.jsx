import React from 'react';
import styles from '../styles/Title.module.css';

const Title = () => {
  return (
    <section className={styles.title}>
      <h1>
        Bonjour <span className={styles.firstnametitle}>{}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
};

export default Title;
