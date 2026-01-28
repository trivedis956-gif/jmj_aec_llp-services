import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, bgcolor: 'background.paper', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Typography variant="subtitle1" color="text.primary">JMJ AEC Services LLP</Typography>
          <Typography variant="body2" color="text.secondary">Serving Canada · Australia · Europe since 2014</Typography>
        </div>

        <div>
          <Typography variant="body2" color="text.secondary">contact@jmjaec.com</Typography>
          <IconButton component={Link} href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" sx={{ ml: 1 }}>
            <LinkedInIcon />
          </IconButton>
        </div>
      </Container>
    </Box>
  );
}
