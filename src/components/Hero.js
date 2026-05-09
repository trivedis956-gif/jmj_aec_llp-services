import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link as RouterLink } from 'react-router-dom';
import heroBg from '../assets/hero-bg.jpg';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
        minHeight: { xs: 520, md: 620 },
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(10, 25, 91, 0.72)',
          background: 'linear-gradient(180deg, rgba(10,25,91,0.72) 0%, rgba(26,35,126,0.82) 100%)'
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1, height: '100%', px: { xs: 3, md: 6 }, py: { xs: 6, md: 10 } }}>
        <Grid container alignItems="center" sx={{ height: '100%' }}>
          <Grid item xs={12} md={7}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, color: '#ffffff', mb: 2, lineHeight: 1.05 }}>
              Precision engineering deliverables for modern construction.
            </Typography>
            <Typography variant="h6" color="rgba(255,255,255,0.85)" sx={{ mb: 4, maxWidth: 640 }}>
              JMJ AEC Services LLP delivers high-accuracy PDF to CAD conversion, steel detailing, BIM and modeling for global clients.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Button component={RouterLink} to="/contact" variant="contained" color="secondary" sx={{ minWidth: 160 }}>Get a Quote</Button>
              <Button component={RouterLink} to="/services" variant="outlined" color="secondary" sx={{ minWidth: 160, color: '#ffffff', borderColor: 'rgba(255,255,255,0.8)' }}>
                Explore Services
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
