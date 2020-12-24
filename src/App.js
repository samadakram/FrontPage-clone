import React from 'react';
import styles from './App.module.css';

//Import Components
import NavBar from './assests/components/NavBar/NavBar';
import {MainSection} from './assests/components/MainSection/MainSection';
import {ServicesSection} from './assests/components/ServicesSection/ServicesSection';

function App () {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <MainSection />
      <ServicesSection />
    </div>
  )
}

export default App
