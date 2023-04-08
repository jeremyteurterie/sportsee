import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Returns the user ID.
 *
 * @param {number} id - The ID of the user.
 * @returns {{userId: number}} - An object containing the user ID.
 */
export function getUserId(id) {
  // Define state variable and its update function using useState hook.
  const [userId, setUserId] = useState(null);

  // Fetch user data from API when component is mounted using useEffect hook.
  useEffect(() => {
    setUserId(null);
    axios
      .get('http://localhost:3000/user/' + id)
      .then((res) => {
        res.data.data && setUserId(res.data.data);
      })
      .catch((error) => {
        console.error('An error occurred during the API call', error);
        setUserId(null);
      });
  }, []);

  return { userId };
}

/**
 * Returns the user activity sessions.
 *
 * @param {number} id - The ID of the user.
 * @returns {{userActivity: array}} - An object containing an array of user activity sessions.
 */
export function getUserActivity(id) {
  const [userActivity, setUserActivity] = useState(null);

  useEffect(() => {
    setUserActivity(null);
    axios
      .get('http://localhost:3000/user/' + id + '/activity')
      .then((res) => {
        res.data.data.sessions && setUserActivity(res.data.data.sessions);
      })
      .catch((error) => {
        console.error('An error occurred during the API call', error);
        setUserActivity(null);
      });
  }, []);

  return { userActivity };
}

/**
 * Returns the user's average sessions.
 *
 * @param {number} id - The ID of the user.
 * @returns {{userAverageSessions: array}} - An object containing an array of user's average sessions.
 */
export function getUserAverageSessions(id) {
  const [userAverageSessions, setUserAverageSessions] = useState(null);

  useEffect(() => {
    setUserAverageSessions(null);
    axios
      .get('http://localhost:3000/user/' + id + '/average-sessions')
      .then((res) => {
        res.data.data.sessions &&
          setUserAverageSessions(res.data.data.sessions);
      })
      .catch((error) => {
        console.error('An error occurred during the API call', error);
        setUserAverageSessions(null);
      });
  }, []);

  return { userAverageSessions };
}

/**
 * Returns the user's performance data.
 *
 * @param {number} id - The ID of the user.
 * @returns {{userPerformance: object}} - An object containing the user's performance data.
 */
export function getUserPerformance(id) {
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    setUserPerformance(null);
    axios
      .get('http://localhost:3000/user/' + id + '/performance')
      .then((res) => {
        res.data.data && setUserPerformance(res.data.data);
      })
      .catch((error) => {
        console.error('An error occurred during the API call', error);
        setUserPerformance(null);
      });
  }, []);

  return { userPerformance };
}

/**
 * Retrieves the score for the user with the given id.
 *
 * @param {number} id - The id of the user to retrieve the score for.
 * @returns {{userScoreKarl: number | null, userScoreCecilia: number | null}} - An object containing the scores for Karl and Cecilia.
 */
export function getUserScore(id) {
  const [userScoreKarl, setUserScoreKarl] = useState(null);
  const [userScoreCecilia, setUserScoreCecilia] = useState(null);

  useEffect(() => {
    setUserScoreKarl(null);
    setUserScoreCecilia(null);
    if (id === 12) {
      axios
        .get('http://localhost:3000/user/' + id)
        .then((res) => {
          res.data.data.todayScore &&
            setUserScoreKarl(res.data.data.todayScore);
        })
        .catch((error) => {
          console.error('An error occurred during the API call', error);
          setUserScoreKarl(null);
        });
    } else if (id === 18) {
      axios
        .get('http://localhost:3000/user/' + id)
        .then((res) => {
          res.data.data.score && setUserScoreCecilia(res.data.data.score);
        })
        .catch((error) => {
          console.error('An error occurred during the API call', error);
          setUserScoreCecilia(null);
        });
    }
  }, []);
  return { userScoreKarl, userScoreCecilia };
}
