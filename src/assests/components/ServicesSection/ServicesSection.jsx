import React from 'react';
import { Grid } from '@material-ui/core';

export const ServicesSection = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>UX Design</Grid>
                <Grid item xs={12}>Content CopyWrititng</Grid>
                <Grid item xs={12}>Content Writing</Grid>
            </Grid>
        </div>
    );
}