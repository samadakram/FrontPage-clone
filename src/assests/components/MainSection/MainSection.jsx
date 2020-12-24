import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import styles from './MainSection.module.css';

// Import Images
import Factory from '../../Images/ImageEmpty.svg';
import Layer from '../../Images/Layer.svg';
import Brain from '../../Images/Brain.svg';



export const MainSection = () => {
    return (
        <div className={styles.container}>
            <Grid container className={styles.mainGrid}>
                <Grid item xs={12} md={5} className={styles.gridText}>
                    <Typography variant="h2">CORTEX</Typography>
                    <Typography variant="h2">COPYWRITER</Typography>
                    <Typography variant="body1">Enhance your communications with psychology-based copywriting and UX writing</Typography>
                    <Button variant="contained" className={styles.button}>Send message</Button>
                </Grid>
                <Grid item xs={12} md={7} className={styles.gridImage}>
                    <img src={Factory} alt="factory" className="factoryImage"/>
                    <img src={Layer} alt="layer" className={styles.layer}/>
                    <img src={Brain} alt="Brain" className={styles.brain}/>
                </Grid>
            </Grid>
        </div>
    );
}