import { React } from 'react';
import { useOutletContext } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import styles from '../styles/Home.module.css';

import Title from '../components/Title';

const Home = () => {
  const [id] = useOutletContext();
  const { data, error } = useFetch(id);

  if (error) {
    throw error;
  }
  return (
    <>
      {data && (
        <>
          <Title />

          <section id={styles.infosContainer}>
            <section id={styles.graphContainer}>
              <section id={styles.barChart}></section>
              <section id={styles.otherCharts}></section>
            </section>

            <section id={styles.keyDatas}></section>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
