import { React, useState, useEffect } from 'react';
import styles from '../styles/Profil.module.css';

// data
import * as Api from '../services/api';
import * as Mock from '../services/mockData';

// components
import Header from '../components/Header';
import Title from '../components/Title';
import BarChart from '../components/BarChart';

// assets
import calories from '../assets/energy.svg';
import glucides from '../assets/apple.svg';
import proteines from '../assets/chicken.svg';
import lipides from '../assets/cheeseburger.svg';

const Profil = () => {
  return (
    <>
      <Header />
      <Title />
      <BarChart />
    </>
  );
};

export default Profil;
