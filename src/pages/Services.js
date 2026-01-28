import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services';

export default function Services() {
  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Services</Typography>
      <Grid container spacing={3}>
        {services.map((s) => (
          <Grid item xs={12} md={6} key={s.id}>
            <ServiceCard title={s.title} description={s.description} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
