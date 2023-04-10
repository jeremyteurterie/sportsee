import React, { useEffect } from 'react';
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

/**
 * A React functional component representing the Home page of the application.
 * @return {JSX.Element} The JSX element that represents the Home page.
 */
const Home = () => {
  const [id] = useOutletContext();
  const { userId } = getUserId(id);
  const { userActivity } = getUserActivity(id);
  const { userAverageSessions } = getUserAverageSessions(id);
  const { userPerformance } = getUserPerformance(id);
  const { userScoreCecilia, userScoreKarl } = getUserScore(id);

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
                  {id === 12 && userScoreCecilia !== undefined && (
                    <ScoreChart scoreData={userScoreKarl} />
                  )}
                  {id === 18 && userScoreKarl !== undefined && (
                    <ScoreChart scoreData={userScoreCecilia} />
                  )}
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
