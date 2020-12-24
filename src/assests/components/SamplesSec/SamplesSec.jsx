import React from 'react';
import { Grid } from '@material-ui/core';

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
                        <Grid item md={4}>CARD 1</Grid>
                        <Grid item md={4}>CARD 2</Grid>
                        <Grid item md={4}>CARD 3</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}