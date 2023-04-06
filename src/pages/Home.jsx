import { React } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  getUserId,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../hooks/useAxios';

import styles from '../styles/Home.module.css';

import Title from '../components/Title';

const Home = () => {
  const [id] = useOutletContext();
  const { userId } = getUserId(id);
  const { userActivity } = getUserActivity(id);
  const { userAverageSessions } = getUserAverageSessions(id);
  const { userPerformance } = getUserPerformance(id);

  return (
    <>
      {/* {error && <>{error}</>} */}
      {userId ? (
        <>
          <Title firstName={userId.userInfos.firstName} />
        </>
      ) : null}
      {userActivity ? <></> : null}
      {userAverageSessions ? <></> : null}
      {userPerformance ? <></> : null}

      <section id={styles.infosContainer}>
        <section id={styles.graphContainer}>
          <section id={styles.barChart}></section>
          <section id={styles.otherCharts}></section>
        </section>

        <section id={styles.keyDatas}></section>
      </section>
    </>
  );
};

export default Home;
