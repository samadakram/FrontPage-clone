import React from 'react';
import { Grid } from '@material-ui/core';
import Factory from '../../Images/ImageEmpty.svg';
import styles from './MainSection.module.css';

export const MainSection = () => {
    return (
        <div>
            <Grid container>
                <Grid item md={5} className={styles.gridText}>
                    <h2>CORTEX</h2>
                    <h2>COPYWRITER</h2>
                    <p>Enhance your communications with psychology-based copywriting and UX writing</p>
                    <button>Send message</button>
                </Grid>
                <Grid item md={7} className={styles.gridImage}>
                    <img src={Factory} alt="factory" className="factoryImage"/>
                </Grid>
            </Grid>
        </div>
    );
}