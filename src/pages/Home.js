import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import AccuracyIcon from '@mui/icons-material/PrecisionManufacturing';
import QualityIcon from '@mui/icons-material/Verified';
import OnTimeIcon from '@mui/icons-material/AccessTime';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CTA from '../components/CTA';
import TestimonialCard from '../components/TestimonialCard';
import cadImage from '../assets/service-cad.jpg';
import steelImage from '../assets/service-steel.jpg';
import bimImage from '../assets/service-bim.png';
import constructionImage from '../assets/industry-construction.jpg';
import fabricationImage from '../assets/industry-fabrication.jpg';
import infrastructureImage from '../assets/industry-infrastructure.jpg';

const featureItems = [
  { icon: <AccuracyIcon fontSize="large" color="primary" />, title: 'Accuracy', body: 'High-precision deliverables built for manufacturing and construction.' },
  { icon: <QualityIcon fontSize="large" color="primary" />, title: 'Quality', body: 'Trusted QA processes and experienced detailing teams.' },
  { icon: <OnTimeIcon fontSize="large" color="primary" />, title: 'On-time Delivery', body: 'Clear milestones and dependable project schedules.' }
];

const serviceHighlights = [
  { id: 'pdf-to-cad', title: 'PDF to CAD', description: 'High-precision conversion for engineers.', image: cadImage },
  { id: 'steel-detailing', title: 'Steel Detailing', description: 'Robust detailing for fabricators.', image: steelImage },
  { id: 'bim-services', title: 'BIM Services', description: 'Advanced 3D modeling and coordination.', image: bimImage }
];

const industries = [
  { title: 'Steel Fabricators', image: fabricationImage },
  { title: 'Contractors', image: constructionImage },
  { title: 'Structural Consultants', image: infrastructureImage }
];

const testimonials = [
  { quote: 'JMJ delivered accurate steel details on a tight schedule. Their team is very reliable.', name: 'Sarah Richards', role: 'Fabrication Manager' },
  { quote: 'Their BIM coordination helped us avoid costly rework on our last project.', name: 'Michael Green', role: 'Project Engineer' },
  { quote: 'Clear communication, fast turnaround, and excellent quality every time.', name: 'Priya Sharma', role: 'Structural Consultant' }
];

export default function Home() {
  return (
    <Box>
      <Hero />

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>What We Deliver</Typography>
        <Grid container spacing={3}>
          {featureItems.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Card elevation={2} sx={{ p: 4, borderRadius: 3, height: '100%', border: '2px solid transparent', transition: 'all 0.1s linear', '&:hover': { transform: 'scale(1.03)', boxShadow: 6, border: '2px solid #1a237e' } }}>
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{item.title}</Typography>
                <Typography color="text.secondary">{item.body}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Featured Services</Typography>
        <Grid container spacing={3}>
          {serviceHighlights.map((service) => (
            <Grid item xs={12} md={4} key={service.id}>
              <ServiceCard title={service.title} description={service.description} image={service.image} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Industries We Serve</Typography>
        <Grid container spacing={3}>
          {industries.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 3, bgcolor: 'background.paper', border: '2px solid transparent', transition: 'all 0.1s linear', '&:hover': { transform: 'scale(1.03)', boxShadow: 6, border: '2px solid #1a237e' } }}>
                <Box component="img" src={item.image} alt={item.title} sx={{ width: '100%', height: 210, objectFit: 'cover' }} />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>What Our Clients Say</Typography>
        <Grid container spacing={3}>
          {testimonials.map((item) => (
            <Grid item xs={12} md={4} key={item.name}>
              <TestimonialCard quote={item.quote} name={item.name} title={item.role} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <CTA />
    </Box>
  );
}
