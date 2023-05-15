import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import styles from '../styles/Layout.module.css';

/**
 * Renders the layout of the application, allowing users to select a user to view.
 * @returns {JSX.Element} The layout of the application.
 */
const Layout = () => {
  const [id, setId] = useState();

  return (
    <>
      {id === undefined ? (
        // If no user is selected, display buttons to select a user
        <section id={styles.layout}>
          <button onClick={() => setId(12)} className={styles.buttonLayout}>
            KARL
          </button>
          <br />
          <button onClick={() => setId(18)} className={styles.buttonLayout}>
            CECILIA
          </button>
        </section>
      ) : (
        // If a user is selected, display the header and the user's data
        <>
          <Header />
          <div className={styles.main}>
            <Outlet context={[id, setId]} />
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
