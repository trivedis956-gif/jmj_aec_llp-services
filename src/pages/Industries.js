import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const industries = ['Steel Fabricators', 'Contractors', 'Structural Consultants', 'Engineering Firms'];

export default function Industries() {
  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Industries</Typography>
      <Grid container spacing={2}>
        {industries.map((i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Typography sx={{ fontWeight: 600 }}>{i}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
