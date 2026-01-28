import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { NavLink as RouterLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' }
];

export default function Navbar() {
  return (
    <AppBar position="static" color="inherit" elevation={1} sx={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography component={RouterLink} to="/" variant="h6" color="primary" sx={{ textDecoration: 'none', fontWeight: 700 }}>
            JMJ AEC
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            Services LLP
          </Typography>
        </Box>

        <Box>
          {navLinks.map((nav) => (
            <Button
              key={nav.to}
              component={RouterLink}
              to={nav.to}
              color="inherit"
              sx={{ textTransform: 'none', color: 'text.primary', ml: 1 }}
            >
              {nav.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
