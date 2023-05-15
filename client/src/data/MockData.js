import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './mock';

/**
 * Returns the user object with the specified ID.
 *
 * @param {number} id - The ID of the user to retrieve.
 * @returns {object|undefined} - The user object with the specified ID, or undefined if no user was found.
 */
export const getUser = (id) => {
  return USER_MAIN_DATA.find(({ id }) => id === id);
};

/**
 * Returns the activity sessions for the user with the specified ID.
 *
 * @param {number} id - The ID of the user to retrieve the activity sessions for.
 * @returns {array|undefined} - An array of activity sessions for the user with the specified ID, or undefined if no user was found.
 */
export const getUserActivity = (id) => {
  return USER_ACTIVITY.find(({ id }) => id === id)?.sessions;
};

/**
 * Returns the average number of sessions for the user with the specified ID.
 *
 * @param {number} id - The ID of the user to retrieve the average sessions for.
 * @returns {number|undefined} - The average number of sessions for the user with the specified ID, or undefined if no user was found.
 */
export const getUserAverageSessions = (id) => {
  return USER_AVERAGE_SESSIONS.find(({ id }) => id === id)?.sessions;
};

/**
 * Returns the performance object for the user with the specified ID.
 *
 * @param {number} id - The ID of the user to retrieve the performance object for.
 * @returns {object|undefined} - The performance object for the user with the specified ID, or undefined if no user was found.
 */
export const getUserPerformance = (id) => {
  return USER_PERFORMANCE.find(({ id }) => id === id);
};
