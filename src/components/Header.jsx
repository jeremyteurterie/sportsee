import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo.png';
import icon1 from '../assets/nav-1.png';
import icon2 from '../assets/nav-2.png';
import icon3 from '../assets/nav-3.png';
import icon4 from '../assets/nav-4.png';

const Header = () => {
  const icons = [icon1, icon2, icon3, icon4];
  return (
    <header>
      <nav className={styles.nav1}>
        <ul>
          <img src={logo} alt="logo sportsee" />
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                if (isActive) {
                  return styles.active;
                } else {
                  return styles.inactive;
                }
              }}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profil"
              className={({ isActive }) => {
                if (isActive) {
                  return styles.active;
                } else {
                  return styles.inactive;
                }
              }}
            >
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reglage"
              className={({ isActive }) => {
                if (isActive) {
                  return styles.active;
                } else {
                  return styles.inactive;
                }
              }}
            >
              Réglage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/communaute"
              className={({ isActive }) => {
                if (isActive) {
                  return styles.active;
                } else {
                  return styles.inactive;
                }
              }}
            >
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className={styles.nav2}>
        <ul>
          <li className={styles.icon}>
            <img src={icon1} alt="" />
          </li>
          <li className={styles.icon}>
            <img src={icon2} alt="" />
          </li>
          <li className={styles.icon}>
            <img src={icon3} alt="" />
          </li>
          <li className={styles.icon}>
            <img src={icon4} alt="" />
          </li>
        </ul>
        <p>Copyright, SportSee 2020</p>
      </nav>
    </header>
  );
};

export default Header;
