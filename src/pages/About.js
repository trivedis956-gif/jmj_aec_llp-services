import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TestimonialCard from '../components/TestimonialCard';
import teamImage from '../assets/about-team.jpg.jpg';

const testimonials = [
  { quote: 'JMJ transformed our drawings into shop-ready details faster than we expected.', name: 'James Nolan', role: 'Fabrication Director' },
  { quote: 'Their precise BIM modeling improved on-site coordination across our project site.', name: 'Anita Desai', role: 'Construction Manager' }
];

export default function About() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>About JMJ AEC Services LLP</Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Engineering excellence through clarity and collaboration.</Typography>
          <Typography sx={{ mb: 3, color: 'text.secondary' }}>
            JMJ AEC Services LLP delivers specialized engineering deliverables for steel fabricators, contractors and structural consultants. Our team works with precision, speed and transparency to support global project delivery.
          </Typography>
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Our Mission</Typography>
              <Typography color="text.secondary">To provide accurate engineering documentation and modeling services that help companies build confidently and efficiently.</Typography>
            </Paper>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Our History</Typography>
              <Typography color="text.secondary">Founded in 2014, we have grown through trusted partnerships with firms in Canada, Australia and Europe, delivering steel detailing, BIM, and conversion services.</Typography>
            </Paper>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box component="img" src={teamImage} alt="JMJ team" sx={{ width: '100%', borderRadius: 3, boxShadow: 4 }} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>What Our Clients Say</Typography>
        <Grid container spacing={3}>
          {testimonials.map((item) => (
            <Grid item xs={12} md={6} key={item.name}>
              <TestimonialCard quote={item.quote} name={item.name} title={item.role} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
        <Button href="/contact" variant="contained" color="primary" size="large">Speak with Our Team</Button>
      </Box>
    </Box>
  );
}
