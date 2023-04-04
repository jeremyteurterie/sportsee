import { React } from 'react';

import Header from '../components/Header';
import Title from '../components/Title';
import BarChart from '../components/BarChart';

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
