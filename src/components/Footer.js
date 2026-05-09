import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 6, bgcolor: 'primary.main', color: '#ffffff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 1 }}>JMJ AEC Services LLP</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Premium AEC support for steel fabricators, contractors, and structural consultants.</Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><MailOutlineIcon fontSize="small" /> sales@jmjaec.com</Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}><PhoneIcon fontSize="small" /> +91-8000657441</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>Newsletter</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>Stay updated on our latest engineering and detailing services.</Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <TextField
                placeholder="Email address"
                size="small"
                sx={{ bgcolor: '#ffffff', borderRadius: 1 }}
                InputProps={{ sx: { borderRadius: 1 } }}
              />
              <Button variant="contained" color="secondary" sx={{ mt: 1, alignSelf: 'flex-start' }}>Subscribe</Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>Connect with us</Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <IconButton aria-label="LinkedIn" component={Link} href="https://www.linkedin.com/in/jmj-aec-services" target="_blank" rel="noopener noreferrer" sx={{ color: '#ffffff' }}><LinkedInIcon /></IconButton>
              <IconButton aria-label="Twitter" component={Link} href="https://www.twitter.com" target="_blank" sx={{ color: '#ffffff' }}><TwitterIcon /></IconButton>
              <IconButton aria-label="Facebook" component={Link} href="https://www.facebook.com" target="_blank" sx={{ color: '#ffffff' }}><FacebookIcon /></IconButton>
            </Box>
            <Typography variant="body2" color="inherit">Serving Canada · Australia · Europe since 2014</Typography>
          </Grid>
        </Grid>

        <Typography variant="body2" align="center" sx={{ mt: 5, opacity: 0.8 }}>
          © 2026 JMJ AEC Services LLP. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
