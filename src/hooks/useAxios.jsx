import { useState, useEffect } from 'react';
import axios from 'axios';

export function getUserId(id) {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setUserId(null);
    axios.get('http://localhost:3000/user/' + id).then((res) => {
      res.data.data && setUserId(res.data.data);
    });
  }, []);
  return { userId };
}

export function getUserActivity(id) {
  const [userActivity, setUserActivity] = useState(null);

  useEffect(() => {
    setUserActivity(null);
    axios.get('http://localhost:3000/user/' + id + '/activity').then((res) => {
      res.data.data.sessions && setUserActivity(res.data.data.sessions);
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
      });
  }, []);
  return { userPerformance };
}

export function getUserScore(id) {
  const [userScore, setUserScore] = useState(null);

  useEffect(() => {
    setUserScore(null);
    axios.get('http://localhost:3000/user/' + id).then((res) => {
      res.data.data.score && setUserScore(res.data.data.score);
    });
  }, []);
  return { userScore };
}
