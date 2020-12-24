import React from 'react';
import { Grid } from '@material-ui/core';

export const ServicesSection = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item md={6}>Image</Grid>
                        <Grid item md={6}>TEXT</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item md={6}>Image</Grid>
                        <Grid item md={6}>TEXT</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item md={6}>Image</Grid>
                        <Grid item md={6}>TEXT</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}