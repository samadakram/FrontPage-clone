import React from 'react';
import styles from './App.module.css';

//Import Components
import NavBar from './assests/components/NavBar/NavBar';
import {MainSection} from './assests/components/MainSection/MainSection';
import {ServicesSection} from './assests/components/ServicesSection/ServicesSection';
import {SamplesSec} from './assests/components/SamplesSec/SamplesSec';
import {Reviews} from './assests/components/Reviews/Reviews';
// import {Email} from './assests/components/Email/Email';

function App () {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <MainSection />
      <ServicesSection />
      <SamplesSec />
      <Reviews />
      {/* <Email /> */}
    </div>
  )
}

export default App
