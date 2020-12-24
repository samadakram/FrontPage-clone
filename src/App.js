import React from 'react';
import styles from './App.module.css';

//Import Components
import NavBar from './assests/components/NavBar/NavBar';
import {MainSection} from './assests/components/MainSection/MainSection';

function App () {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <MainSection />
    </div>
  )
}

export default App
