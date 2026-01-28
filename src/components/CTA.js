import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

export default function CTA() {
  return (
    <Box sx={{ mt: 6, py: 6, bgcolor: 'grey.50', textAlign: 'center', borderRadius: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Ready to accelerate your project?</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>Contact us for accurate, timely engineering deliverables.</Typography>
      <Button component={RouterLink} to="/contact" variant="contained" color="primary">Contact Us</Button>
    </Box>
  );
}
