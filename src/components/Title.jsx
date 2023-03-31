import React from 'react';
import styles from '../styles/Title.module.css';
import PropTypes from 'prop-types';

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

Title.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default Title;
