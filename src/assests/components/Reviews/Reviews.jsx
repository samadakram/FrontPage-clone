import React from 'react';
import styles from './Reviews.module.css';
import { Grid } from '@material-ui/core';

// Import Images
import Image1 from '../../Images/reviewImages/pic1.svg';
import Image2 from '../../Images/reviewImages/pic2.svg';
import Image3 from '../../Images/reviewImages/pic3.svg';
import Image4 from '../../Images/reviewImages/pic4.svg';
import Image5 from '../../Images/reviewImages/pic5.svg';
import Image6 from '../../Images/reviewImages/pic6.svg';

export const Reviews = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container className={styles.imageGrid}>
                        <Grid item xs={12} md={6} className={styles.reviewSec}>
                            <div className={styles.reviewDiv}>
                                <div>
                                    <img src={Image1} alt="avatar1" className={styles.image}/>
                                </div>
                                <div>
                                    <h5>Karl Van Lieshout</h5>
                                    <p>Owner & Operator – Ausbeds</p>
                                    <h4>"..innovative"<br/>"..seamless UX""<br/>"..more online sales"</h4>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} className={styles.reviewSec}>
                        <div className={styles.reviewDiv}>
                                <div>
                                    <img src={Image2} alt="avatar2" className={styles.image}/>
                                </div>
                                <div>
                                    <h5>Rosawin Siri</h5>
                                    <p>Digital Marketing Manager – 4mation Technologies</p>
                                    <h4>"..flexible"<br/>"..nailed voice & tone"<br/>"..keep on retainer"</h4>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                <Grid container className={styles.imageGrid}>
                        <Grid item xs={12} md={6} className={styles.reviewSec}>
                            <div className={styles.reviewDiv}>
                                <div>
                                    <img src={Image3} alt="avatar3" className={styles.image}/>
                                </div>
                                <div>
                                    <h5>Craig Erskine-Smith</h5>
                                    <p>CEO – Erskine Oral Care</p>
                                    <h4>"..wonderful ideas"<br/>"..perfect tagline"<br/>"..excellent wireframes"</h4>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} className={styles.reviewSec}>
                        <div className={styles.reviewDiv}>
                                <div>
                                    <img src={Image4} alt="avatar4" className={styles.image}/>
                                </div>
                                <div>
                                    <h5>Liam Key</h5>
                                    <p>Creative Director – Imagination Pioneers Studios</p>
                                    <h4>"..love his passion"<br/>..heaps of depth"<br/>"..speaks to my brand"</h4>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                <Grid container className={styles.imageGrid}>
                        <Grid item xs={12} md={6} className={styles.reviewSec}>
                            <div className={styles.reviewDiv}>
                                <div>
                                    <img src={Image5} alt="avatar5" className={styles.image}/>
                                </div>
                                <div>
                                    <h5>Eoin Mullins</h5>
                                    <p>Director – Corbel Technologies</p>
                                    <h4>"..beautiful copy"<br/>"..psychology edge"<br/>"..emotional currents"</h4>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} className={styles.reviewSec}>
                        <div className={styles.reviewDiv}>
                                <div>
                                    <img src={Image6} alt="avatar6" className={styles.image}/>
                                </div>
                                <div>
                                    <h5>Adrian Rodriguez Soto</h5>
                                    <p>eCommerce Manager – EUX Agency</p>
                                    <h4>"..superior intellect"<br/>"..deep psychology"<br/>"..doubled conversions"</h4>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}