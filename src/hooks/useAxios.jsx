import { useState, useEffect } from 'react';
import axios from 'axios';

export function getUserId(id) {
  const [userId, setUserId] = useState(null);

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
