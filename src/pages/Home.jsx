import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [id, setId] = useState();
  return (
    <>
      <Header />
      <section id={styles.layout}>
        <button onClick={() => setId(18)} className={styles.buttonLayout}>
          CECILIA
        </button>
        <button onClick={() => setId(12)} className={styles.buttonLayout}>
          KARL
        </button>
      </section>
    </>
  );
};

export default Home;
