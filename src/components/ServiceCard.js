import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ServiceCard({ title, description }) {
  return (
    <Card elevation={1} sx={{ height: '100%', transition: 'transform 0.18s ease', '&:hover': { transform: 'translateY(-6px)' } }}>
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>{title}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
    </Card>
  );
}
