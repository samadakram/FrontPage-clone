import React from 'react';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import Chatbot from '../../Images/cardImages/chatbot.jpg';
import Speedpix from '../../Images/cardImages/speedpix.jpg';
import StartScale from '../../Images/cardImages/startscale.jpg';

export const SamplesSec = () => {
    return (
        <div>
            <h1>Samples</h1>
            <Grid container>
                <Grid item xs={12}>
                    <h3>Useful UX</h3>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <Card>
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
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
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
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
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
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}