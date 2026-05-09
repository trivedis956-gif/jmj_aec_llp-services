import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

export default function CTA() {
  return (
    <Box sx={{ mt: 8, py: 8, bgcolor: 'primary.main', color: '#ffffff', textAlign: 'center', borderRadius: 3 }}> 
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Ready to accelerate your project?</Typography>
      <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', mb: 4, maxWidth: 660, mx: 'auto' }}>
        Partner with JMJ AEC Services LLP for detailed, precise engineering deliverables that keep projects on schedule and budget.
      </Typography>
      <Button component={RouterLink} to="/contact" variant="contained" color="secondary" sx={{ minWidth: 180 }}>Contact Us</Button>
    </Box>
  );
}
