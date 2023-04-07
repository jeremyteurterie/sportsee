import { React } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  getUserId,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../hooks/useAxios';

import Title from '../components/Title';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';

import styles from '../styles/Home.module.css';

const Home = () => {
  const [id] = useOutletContext();
  const { userId } = getUserId(id);
  const { userActivity } = getUserActivity(id);
  const { userAverageSessions } = getUserAverageSessions(id);
  const { userPerformance } = getUserPerformance(id);
  console.log(userAverageSessions);

  return (
    <>
      <div className={styles.userinfos}>
        {userId ? <Title firstName={userId.userInfos.firstName} /> : null}
        <main>
          <article className={styles.graphs}>
            {userActivity ? (
              <BarChart dailyData={userActivity.sessions} />
            ) : null}
            {userAverageSessions ? (
              <span className={styles.advancedstats}>
                <LineChart durationData={userAverageSessions} />
              </span>
            ) : null}
          </article>
          {userPerformance ? <></> : null}
        </main>
      </div>
    </>
  );
};

export default Home;
