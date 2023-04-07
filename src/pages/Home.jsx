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

import styles from '../styles/Home.module.css';

const Home = () => {
  const [id] = useOutletContext();
  const { userId } = getUserId(id);
  const { userActivity } = getUserActivity(id);
  const { userAverageSessions } = getUserAverageSessions(id);
  const { userPerformance } = getUserPerformance(id);
  console.log(userActivity);

  return (
    <>
      <div className={styles.userinfos}>
        {userId ? <Title firstName={userId.userInfos.firstName} /> : null}
        <main>
          {userActivity ? (
            <article className={styles.graphs}>
              <BarChart dailyData={userActivity.sessions} />
            </article>
          ) : null}
          {userAverageSessions ? <></> : null}
          {userPerformance ? <></> : null}
        </main>
      </div>
    </>
  );
};

export default Home;
