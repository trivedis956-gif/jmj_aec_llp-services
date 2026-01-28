import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link as RouterLink } from 'react-router-dom';

export default function Hero() {
  return (
    <Box sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
            Engineering Accuracy You Can Build On
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Design. Detail. Deliver.
          </Typography>
          <Button component={RouterLink} to="/contact" variant="contained" color="primary" sx={{ mr: 2 }}>
            Get a Quote
          </Button>
          <Button component={RouterLink} to="/services" variant="outlined" color="primary">
            Our Services
          </Button>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box sx={{ height: 240, borderRadius: 2, bgcolor: 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography color="text.secondary">3D model / steel detail preview</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
