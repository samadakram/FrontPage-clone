import React from 'react';
import styles from './SamplesSec.module.css';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import Chatbot from '../../Images/cardImages/chatbot.jpg';
import Speedpix from '../../Images/cardImages/speedpix.jpg';
import StartScale from '../../Images/cardImages/startscale.jpg';
import Blaze from '../../Images/cardImages/blaze1.jpg';
import Tara from '../../Images/cardImages/tara2.jpg';
import PureLearning from '../../Images/cardImages/purelearning3.jpg';
import AdGroove from '../../Images/cardImages/adgroove4.jpg';
import Sample from '../../Images/cardImages/sample5.jpg';

export const SamplesSec = () => {
    return (
        <div className={styles.container}>
            <Typography variant="h4" className={styles.sampleHead}>Samples</Typography>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" className={styles.usefulHead}>Useful UX</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className={styles.uxGrid}>
                        <Grid item xs={12} md={4} className={styles.cardGrid}>
                            <div>
                                <Card className={styles.cards}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200"
                                            image={Chatbot}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Scripted Chatbot
                                        </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Conversation design guidelines such as chatbot personality, flowcharts, and scripts helped me convert complex mattress fitting data into simple dialogue for a scripted chatbot that guides customers in choosing the right mattress for their weight range.
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Case study
                                    </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} className={styles.cardGrid}>
                            <div>
                                <Card className={styles.cards}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200"
                                            image={Speedpix}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                User Onboarding
                                        </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Here is the first screen in an onboarding process I wrote for a SaaS product. To create a smooth introduction to the product and improve conversion rates, I used reassuring details and informative labels to clear possible uncertainties and reduce ambiguity.
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            See more
                                    </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} className={styles.cardGrid}>
                            <div>
                                <Card className={styles.cards}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200"
                                            image={StartScale}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Product Development
                                        </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                As the sole UX writer on a product team building the 'Uber of marketing', I wrote and designed web copy, microcopy, notifications, forms, FAQs, sales video script, automated emails, signup page, login page, pricing page, checkout page, and more.
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Case study coming in 2020
                                    </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" className={styles.usefulHead}>Digital Copy</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className={styles.uxGrid}>
                        <Grid item xs={12} sm={6} md={4} className={styles.cardGrid}>
                            <div>
                                <Card className={styles.cards}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200"
                                            image={Blaze}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Rebranding Campaign
                                        </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                I developed a new brand voice and brand identity – content style guide, design system, brand name, logo, tagline, and website – to improve communications and online presence.
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Case study
                                    </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className={styles.cardGrid}>
                            <div>
                                <Card className={styles.cards}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200"
                                            image={Tara}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Facebook Ads
                                        </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                I’ve lost count of how many Facebook ads I’ve written. My general strategy for writing ads with limited space is to make sure the copy focuses on a single, specific thought, and shows empathy. Check out some of my recent ads.
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            See more
                                    </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className={styles.cardGrid}>
                            <div>
                                <Card className={styles.cards}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200"
                                            image={PureLearning}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Explainer Video
                                        </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Here’s a screenshot for a video I wrote, storyboarded, and directed. The aim was to build awareness for an eLearning company. The copy – which inspired the audience to think, feel, and act – helped increase sales by 9.86%.
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            See more
                                    </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} className={styles.cardGrid}>
                            <div>
                                <Card className={styles.cards}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200"
                                            image={AdGroove}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                YouTube Ad
                                        </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Here is Groovysaurus Rex – the company mascot in a 3D animated video advertisement which I wrote, storyboarded, and directed. The ad ran for 30 days and yielded 19 conversions, with a 67% view rate.
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            See more
                                    </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} className={styles.cardGrid}>
                            <div>
                                <Card className={styles.cards}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200"
                                            image={Sample}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Pilot Screenplay
                                        </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Screenwriting is one of my specialties. My award-winning, original, sci-fi, adult animated, pilot screenplay has successfully been pitched to production companies in the USA and Australia.
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Award here
                                    </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}