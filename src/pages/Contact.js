import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const validate = () => {
    if (!form.name.trim()) return 'Name is required.';
    if (!form.email.trim()) return 'Email is required.';
    const re = /\S+@\S+\.\S+/;
    if (!re.test(form.email)) return 'Enter a valid email.';
    if (!form.message.trim()) return 'Message is required.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setOpen(true);
      return;
    }
    setForm({ name: '', email: '', message: '' });
    setError('');
    setOpen(true);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>Contact Us</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }} component="form" onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              required
              sx={{ mb: 2 }}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <TextField
              label="Email"
              fullWidth
              required
              sx={{ mb: 2 }}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <TextField
              label="Message"
              fullWidth
              required
              multiline
              rows={6}
              sx={{ mb: 3 }}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Button type="submit" variant="contained" color="primary" size="large">Send Message</Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper elevation={2} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Find Us</Typography>
            <Typography sx={{ mb: 1 }}>JMJ AEC Services LLP</Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>123 Engineering Lane, Suite 400, Vancouver, BC V5K 0A1</Typography>
            <Typography sx={{ fontWeight: 700, mt: 2 }}>Email</Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>sales@jmjaec.com</Typography>
            <Typography sx={{ fontWeight: 700, mt: 2 }}>Phone</Typography>
            <Typography color="text.secondary">+91-8000657441</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
        {error ? (
          <Alert severity="error" onClose={() => setOpen(false)}>{error}</Alert>
        ) : (
          <Alert severity="success" onClose={() => setOpen(false)}>Message sent (demo only)</Alert>
        )}
      </Snackbar>
    </Box>
  );
}
