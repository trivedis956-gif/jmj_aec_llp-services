import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink as RouterLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' }
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="sticky" color="inherit" elevation={2} sx={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 110, py: 0, px: 2 }}>
        <Box component={RouterLink} to="/" sx={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', ml: '24px', justifyContent: 'center', height: 110 }}>
          <Typography sx={{ fontFamily: 'Roboto, Inter, sans-serif', fontSize: 32, fontWeight: 800, color: '#1a237e', lineHeight: 1.1, m: 0, p: 0 }}>
            JMJ AEC Services
          </Typography>
          <Typography sx={{ fontFamily: 'Roboto, Inter, sans-serif', fontSize: 16, fontWeight: 600, color: '#1a237e', letterSpacing: '1.5px', lineHeight: 1.2 }}>
            Design. Detail. Deliver.
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <Box sx={{ width: 260, p: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h6">Navigation</Typography>
                  <IconButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ mb: 1 }} />
                <List>
                  {navLinks.map((nav) => (
                    <ListItemButton
                      key={nav.to}
                      component={RouterLink}
                      to={nav.to}
                      onClick={() => setDrawerOpen(false)}
                    >
                      <ListItemText primary={nav.label} />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navLinks.map((nav) => (
              <Button
                key={nav.to}
                component={RouterLink}
                to={nav.to}
                color="inherit"
                sx={{ textTransform: 'none', color: 'text.primary' }}
              >
                {nav.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
