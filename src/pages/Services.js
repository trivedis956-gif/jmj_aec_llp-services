import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ServiceCard from '../components/ServiceCard';
import cadImage from '../assets/service-cad.jpg';
import steelImage from '../assets/service-steel.jpg';
import bimImage from '../assets/service-bim.png';

const keyServices = [
  { id: 'pdf-to-cad', title: 'PDF to CAD Conversion', description: 'High-precision conversion for engineers, producing fabrication-ready CAD models from PDFs, drawings, and standards.', image: cadImage },
  { id: 'steel-detailing', title: 'Steel Detailing', description: 'Robust detailing for fabricators with clear connection, bolt, weld, and erection information.', image: steelImage },
  { id: 'bim-services', title: 'BIM Services', description: 'Advanced 3D modeling, clash coordination, and BIM deliverables to support construction and fabrication.', image: bimImage }
];

export default function Services() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Services</Typography>
      <Grid container spacing={3}>
        {keyServices.map((service) => (
          <Grid item xs={12} md={4} key={service.id}>
            <ServiceCard title={service.title} description={service.description} image={service.image} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, p: 4, bgcolor: 'background.paper', borderRadius: 3, boxShadow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Custom engineering support</Typography>
        <Typography color="text.secondary">We also provide GA drawings, assembly documentation, part drawings and NC data to help your shop floor operate efficiently.</Typography>
      </Box>
    </Box>
  );
}
