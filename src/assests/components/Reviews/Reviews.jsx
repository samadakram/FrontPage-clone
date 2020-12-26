import React from 'react';
import styles from './Reviews.module.css';
import { Grid, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

// Import Images
import Image1 from '../../Images/reviewImages/pic1.svg';
import Image2 from '../../Images/reviewImages/pic2.svg';
import Image3 from '../../Images/reviewImages/pic3.svg';
import Image4 from '../../Images/reviewImages/pic4.svg';
import Image5 from '../../Images/reviewImages/pic5.svg';
import Image6 from '../../Images/reviewImages/pic6.svg';

export const Reviews = () => {
    return (
        <div className={styles.container}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container className={styles.imageGrid}>
                        <Grid item xs={12} md={6} className={styles.reviewSec}>
                            <motion.div whileHover={{ scale: 1.1 }} className={styles.reviewDiv}>
                                <div className={styles.imageDiv}>
                                    <img src={Image1} alt="avatar1" className={styles.image} />
                                </div>
                                <div className={styles.textDiv}>
                                    <Typography variant="h6">Karl Van Lieshout</Typography>
                                    <Typography variant="body2">Owner & Operator – Ausbeds</Typography>
                                    <Typography variant="h5">"..innovative"<br />"..seamless UX""<br />"..more online sales"</Typography>
                                </div>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={6} className={styles.reviewSec}>
                            <motion.div whileHover={{ scale: 1.1 }} className={styles.reviewDiv}>
                                <div className={styles.imageDiv}>
                                    <img src={Image2} alt="avatar2" className={styles.image} />
                                </div>
                                <div className={styles.textDiv}>
                                    <Typography variant="h6">Rosawin Siri</Typography>
                                    <Typography variant="body2">Digital Marketing Manager – 4mation Technologies</Typography>
                                    <Typography variant="h5">"..flexible"<br />"..nailed voice & tone"<br />"..keep on retainer"</Typography>
                                </div>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className={styles.imageGrid}>
                        <Grid item xs={12} md={6} className={styles.reviewSec}>
                            <motion.div whileHover={{ scale: 1.1 }} className={styles.reviewDiv}>
                                <div className={styles.imageDiv}>
                                    <img src={Image3} alt="avatar3" className={styles.image} />
                                </div>
                                <div className={styles.textDiv}>
                                    <Typography variant="h6">Craig Erskine-Smith</Typography>
                                    <Typography variant="body2">CEO – Erskine Oral Care</Typography>
                                    <Typography variant="h5">"..wonderful ideas"<br />"..perfect tagline"<br />"..excellent wireframes"</Typography>
                                </div>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={6} className={styles.reviewSec}>
                            <motion.div whileHover={{ scale: 1.1 }} className={styles.reviewDiv}>
                                <div className={styles.imageDiv}>
                                    <img src={Image4} alt="avatar4" className={styles.image} />
                                </div>
                                <div className={styles.textDiv}>
                                    <Typography variant="h6">Liam Key</Typography>
                                    <Typography variant="body2">Creative Director – Imagination Pioneers Studios</Typography>
                                    <Typography variant="h5">"..love his passion"<br />..heaps of depth"<br />"..speaks to my brand"</Typography>
                                </div>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className={styles.imageGrid}>
                        <Grid item xs={12} md={6} className={styles.reviewSec}>
                            <div className={styles.reviewDiv}>
                                <div className={styles.imageDiv}>
                                    <img src={Image5} alt="avatar5" className={styles.image} />
                                </div>
                                <div className={styles.textDiv}>
                                    <Typography variant="h6">Eoin Mullins</Typography>
                                    <Typography variant="body2">Director – Corbel Technologies</Typography>
                                    <Typography variant="h5">"..beautiful copy"<br />"..psychology edge"<br />"..emotional currents"</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} className={styles.reviewSec}>
                            <div className={styles.reviewDiv}>
                                <div className={styles.imageDiv}>
                                    <img src={Image6} alt="avatar6" className={styles.image} />
                                </div>
                                <div className={styles.textDiv}>
                                    <Typography variant="h6">Adrian Rodriguez Soto</Typography>
                                    <Typography variant="body2">eCommerce Manager – EUX Agency</Typography>
                                    <Typography variant="h5">"..superior intellect"<br />"..deep psychology"<br />"..doubled conversions"</Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}