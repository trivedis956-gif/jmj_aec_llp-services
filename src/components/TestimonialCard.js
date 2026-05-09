import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function TestimonialCard({ quote, name, title }) {
  return (
    <Card elevation={2} sx={{ borderRadius: 3, height: '100%', border: '2px solid transparent', transition: 'all 0.1s linear', '&:hover': { transform: 'scale(1.03)', boxShadow: 6, border: '2px solid #1a237e' } }}>
      <CardContent>
        <Box sx={{ mb: 2, color: 'primary.main' }}>
          <FormatQuoteIcon fontSize="large" />
        </Box>
        <Typography variant="body1" sx={{ mb: 3, color: 'text.primary' }}>
          {quote}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{name}</Typography>
        <Typography variant="body2" color="text.secondary">{title}</Typography>
      </CardContent>
    </Card>
  );
}
