import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './mock';

export const getUser = (id) => {
  return USER_MAIN_DATA.find(({ id }) => id === id);
};

export const getUserActivity = (id) => {
  return USER_ACTIVITY.find(({ id }) => id === id).sessions;
};

export const getUserAverageSessions = (id) => {
  return USER_AVERAGE_SESSIONS.find(({ id }) => id === id).sessions;
};

export const getUserPerformance = (id) => {
  return USER_PERFORMANCE.find(({ id }) => id === id);
};
