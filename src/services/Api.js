import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

/**
 * get user infos
 * @param {Number} id of user
 * @returns {Promise}
 */
export const getUser = async (id) => {
  return await api.get('/user/' + id).then((res) => res.data.data);
};

/**
 * get user activities
 * @param {Number} id of user
 * @returns {Promise}
 */
export const getUserActivity = async (id) => {
  return await api
    .get('/user/' + id + '/activity')
    .then((res) => res.data.data.sessions);
};

/**
 * get user sessions
 * @param {Number} id of user
 * @returns {Promise}
 */
export const getUserAverageSessions = async (id) => {
  return await api
    .get('/user/' + id + '/average-sessions')
    .then((res) => res.data.data.sessions);
};

/**
 * get user performances
 * @param {Number} id of user
 * @returns {Promise}
 */
export const getUserPerformance = async (id) => {
  return await api
    .get('/user/' + id + '/performance')
    .then((res) => res.data.data);
};
