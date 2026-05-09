import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ServiceCard({ title, description, image }) {
  return (
    <Card elevation={2} sx={{ height: '100%', border: '2px solid transparent', transition: 'all 0.1s linear', '&:hover': { transform: 'scale(1.03)', boxShadow: 6, border: '2px solid #1a237e' } }}>
      <CardActionArea sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100%' }}>
        {image && (
          <CardMedia component="img" height="190" image={image} alt={title} />
        )}
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{title}</Typography>
          <Typography variant="body2" color="text.secondary">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
