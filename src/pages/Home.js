import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CTA from '../components/CTA';
import services from '../data/services';

export default function Home() {
  return (
    <div>
      <Hero />

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>Our Services</Typography>
        <Grid container spacing={3}>
          {services.map((s) => (
            <Grid item xs={12} sm={6} md={4} key={s.id}>
              <ServiceCard title={s.title} description={s.description} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>Why Choose Us</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Accuracy</Typography>
            <Typography color="text.secondary">Precision-focused deliverables that match fabrication requirements.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Quality</Typography>
            <Typography color="text.secondary">Robust QA processes and experienced detailers.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>On-time Delivery</Typography>
            <Typography color="text.secondary">Reliable schedules and clear communication.</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>Industries Served</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}><Typography>Steel Fabricators</Typography></Grid>
          <Grid item xs={12} sm={6} md={3}><Typography>Contractors</Typography></Grid>
          <Grid item xs={12} sm={6} md={3}><Typography>Structural Consultants</Typography></Grid>
          <Grid item xs={12} sm={6} md={3}><Typography>Engineering Firms</Typography></Grid>
        </Grid>
      </Box>

      <CTA />
    </div>
  );
}
