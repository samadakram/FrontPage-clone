import React from 'react';
import styles from './ServicesSection.module.css';
import { Grid } from '@material-ui/core';

// Import Images
import UX from '../../Images/servicesImages/services1.svg';
import WebCopy from '../../Images/servicesImages/services2.svg';
import ContentWrite from '../../Images/servicesImages/services3.svg';

export const ServicesSection = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} className={styles.grid}>
                    <Grid container>
                        <Grid item md={6}>
                            <img src={UX} alt="UX writing"/>
                        </Grid>
                        <Grid item md={6}>TEXT</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={styles.grid}>
                    <Grid container>
                        <Grid item md={6}>
                            <img src={WebCopy} alt="Website copy Writing"/>
                        </Grid>
                        <Grid item md={6}>TEXT</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={styles.grid}>
                    <Grid container>
                        <Grid item md={6}>
                            <img src={ContentWrite} alt="Content Writing"/>
                        </Grid>
                        <Grid item md={6}>TEXT</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}