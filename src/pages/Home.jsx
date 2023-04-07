import { React } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  getUserId,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
  getUserScore,
} from '../hooks/useAxios';

import Title from '../components/Title';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import PerformanceChart from '../components/PerformanceChart';
import ScoreChart from '../components/ScoreChart';
import NutritionCard from '../components/NutritionCard';

import styles from '../styles/Home.module.css';

const Home = () => {
  const [id] = useOutletContext();
  const { userId } = getUserId(id);
  const { userActivity } = getUserActivity(id);
  const { userAverageSessions } = getUserAverageSessions(id);
  const { userPerformance } = getUserPerformance(id);
  const { userScore } = getUserScore(id);

  return (
    <>
      <div className={styles.userinfos}>
        {userId ? <Title firstName={userId.userInfos.firstName} /> : null}
        <main>
          <article className={styles.graphs}>
            {userActivity ? <BarChart dailyData={userActivity} /> : null}
            {
              (userAverageSessions,
              userPerformance ? (
                <span className={styles.advancedstats}>
                  <LineChart durationData={userAverageSessions} />
                  <PerformanceChart performanceData={userPerformance.data} />
                  <ScoreChart scoreData={userScore} />
                </span>
              ) : null)
            }
          </article>
          <article className={styles.stats}>
            {userId ? <NutritionCard data={userId.keyData} /> : null}
          </article>
        </main>
      </div>
    </>
  );
};

export default Home;
