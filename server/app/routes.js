const express = require('express');
const idx = require('idx');

const router = express.Router();

const {
  getUserById,
  getUserActivityById,
  getUserAverageSession,
  getUserPerformance,
} = require('./models');

const { handleNoUserData } = require('./middleware');

router.get('/user/:id', (req, res) => {
  const userId = idx(req, (_) => _.params.id);
  const userData = getUserById(Number(userId));
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://sportsee-jeremyteurterie.netlify.app/'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  ); // If needed
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  ); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  return handleNoUserData(res, userData);
});

router.get('/user/:id/activity', (req, res) => {
  const userId = idx(req, (_) => _.params.id);
  const userData = getUserActivityById(Number(userId));
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://sportsee-jeremyteurterie.netlify.app/'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  ); // If needed
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  ); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  return handleNoUserData(res, userData);
});

router.get('/user/:id/average-sessions', (req, res) => {
  const userId = idx(req, (_) => _.params.id);
  const userData = getUserAverageSession(Number(userId));
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://sportsee-jeremyteurterie.netlify.app/'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  ); // If needed
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  ); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  return handleNoUserData(res, userData);
});

router.get('/user/:id/performance', (req, res) => {
  const userId = idx(req, (_) => _.params.id);
  const userData = getUserPerformance(Number(userId));
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://sportsee-jeremyteurterie.netlify.app/'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  ); // If needed
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  ); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  return handleNoUserData(res, userData);
});

module.exports = router;
