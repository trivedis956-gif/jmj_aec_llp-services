import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function About() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>About Us</Typography>
      <Typography sx={{ mb: 2 }}>JMJ AEC Services LLP provides professional engineering deliverables specializing in PDF to CAD conversion, steel detailing, BIM, 3D modeling, and shop-ready drawings. We support fabricators, contractors, consultants, and engineering firms.</Typography>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: 700 }}>Experience</Typography>
      <Typography color="text.secondary">Serving clients across Canada, Australia and Europe since 2014 with consistent on-time delivery and quality-focused processes.</Typography>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: 700 }}>Global Presence</Typography>
      <Typography color="text.secondary">Active projects and partnerships throughout Canada, Australia and the EU regions.</Typography>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: 700 }}>Core Values</Typography>
      <ul>
        <li>Accuracy</li>
        <li>Quality</li>
        <li>On-time Delivery</li>
      </ul>
    </Box>
  );
}
