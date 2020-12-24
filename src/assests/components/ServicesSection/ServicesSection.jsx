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
                            <img src={UX} alt="UX writing" />
                        </Grid>
                        <Grid item md={6}>
                            <h2>UX Writing</h2>
                            <p>I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.</p>
                            <ul>
                                <li>Microcopy</li>
                                <li>Taxonomy & Labeling</li>
                                <li>Chatbots</li>                               
                                <li>User Research</li>
                                <li>Content Style Guide</li>
                                <li>User Testing</li>
                                <li>Design Principles</li>
                                <li>Prototype</li>                                 
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={styles.grid}>
                    <Grid container>
                        <Grid item md={6}>
                            <img src={WebCopy} alt="Website copy Writing" />
                        </Grid>
                        <Grid item md={6}>TEXT</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={styles.grid}>
                    <Grid container>
                        <Grid item md={6}>
                            <img src={ContentWrite} alt="Content Writing" />
                        </Grid>
                        <Grid item md={6}>TEXT</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}