import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import styles from '../styles/Layout.module.css';

const Layout = () => {
  const [id, setId] = useState();
  console.log(id);
  return (
    <>
      {id === undefined ? (
        <section id={styles.layout}>
          <button onClick={() => setId(18)} className={styles.buttonLayout}>
            CECILIA
          </button>
          <br />
          <button onClick={() => setId(12)} className={styles.buttonLayout}>
            KARL
          </button>
        </section>
      ) : (
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
