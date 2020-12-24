import React from 'react';
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
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <div>
                                <div>
                                    <img src={Image1} alt="image 1" />
                                </div>
                                <div>
                                    <h5>Karl Van Lieshout</h5>
                                    <p>Owner & Operator – Ausbeds</p>
                                    <h4>"..innovative"<br/>"..seamless UX""<br/>..more online sales"</h4>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>Div 2</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>Line 2</Grid>
                <Grid item xs={12}>Line 3</Grid>
            </Grid>
        </div>
    );
}