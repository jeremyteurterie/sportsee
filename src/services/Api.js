import axios from 'axios';

export async function getUserById(id) {
  return await axios
    .get('http://localhost:3000/user/' + id)
    .then((response) => response.data.data);
}

// /**
//  * get user infos
//  * @param {Number} id of user
//  * @returns {Promise}
//  */
// export default function getUser(id) {
//   return api.get('/user/' + id).then((res) => res.data.data);
// }

// /**
//  *
//  * get user activities
//  * @param {Number} id of user
//  * @returns {Promise}
//  */
// export function getUserActivity(id) {
//   return api
//     .get('/user/' + id)
//     .then((res) => console.log(res.data.data.sessions));
// }

// /**
//  * get user sessions
//  * @param {Number} id of user
//  * @returns {Promise}
//  */
// export const getUserAverageSessions = async (id) => {
//   return await api
//     .get('/user/' + id + '/average-sessions')
//     .then((res) => res.data.data.sessions);
// };

// /**
//  * get user performances
//  * @param {Number} id of user
//  * @returns {Promise}
//  */
// export const getUserPerformance = async (id) => {
//   return await api
//     .get('/user/' + id + '/performance')
//     .then((res) => res.data.data);
// };
