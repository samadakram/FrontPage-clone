import React from 'react';
import styles from './ServicesSection.module.css';
import { Grid } from '@material-ui/core';

// Import Images
import UX from '../../Images/servicesImages/services1.svg';
import WebCopy from '../../Images/servicesImages/services2.svg';
import ContentWrite from '../../Images/servicesImages/services3.svg';

export const ServicesSection = () => {
    return (
        <div className={styles.container}>
            <Grid container>
                <Grid item xs={12} className={styles.grid}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <img src={UX} alt="UX writing" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <h2>UX Writing</h2>
                            <p>I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.</p>
                            <ul className={styles.list}>
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
                        <Grid item xs={12} md={6}>
                            <h2>Website Copywriting</h2>
                            <p>Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.</p>
                            <ul>
                                <li>Information Architecture</li>
                                <li>Wireframes</li>
                                <li>Competitor Analysis</li>
                                <li>On-page SEO</li>
                                <li>Off-page SEO</li>
                                <li>USP/UVP</li>
                                <li>Landing Page</li>
                                <li>Sales Letter</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={WebCopy} alt="Website copy Writing" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={styles.grid}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <img src={ContentWrite} alt="Content Writing" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <h2>Content Writing</h2>
                            <p>Give your business a competitive edge with powerful content that can be targeted to any segment of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure.</p>
                            <ul>
                                <li>Headlines & Taglines</li>
                                <li>Content Strategy</li>
                                <li>Blogs & Articles</li>
                                <li>Social Media Content</li>
                                <li>Video Scripts</li>
                                <li>eDMs & Newsletters</li>
                                <li>Case Studies</li>
                                <li>Whitepapers</li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}