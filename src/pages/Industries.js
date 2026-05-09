import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import constructionImage from '../assets/industry-construction.jpg';
import fabricationImage from '../assets/industry-fabrication.jpg';
import infrastructureImage from '../assets/industry-infrastructure.jpg';

const industries = [
  { title: 'Steel Fabricators', description: 'Accurate shop-ready drawings and detailing for steel production.', image: fabricationImage },
  { title: 'Contractors', description: 'Coordinated models and documentation for faster installation.', image: constructionImage },
  { title: 'Structural Consultants', description: 'Reliable structural documentation for design review and project approvals.', image: infrastructureImage }
];

export default function Industries() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Industries We Serve</Typography>
      <Grid container spacing={3}>
        {industries.map((industry) => (
          <Grid item xs={12} md={4} key={industry.title}>
            <Paper elevation={2} sx={{ borderRadius: 3, overflow: 'hidden' }}>
              <Box component="img" src={industry.image} alt={industry.title} sx={{ width: '100%', height: 220, objectFit: 'cover' }} />
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{industry.title}</Typography>
                <Typography color="text.secondary">{industry.description}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
