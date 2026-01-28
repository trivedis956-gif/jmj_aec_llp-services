import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const validate = () => {
    if (!form.name.trim()) return 'Name is required.';
    if (!form.email.trim()) return 'Email is required.';
    // simple email check
    const re = /\S+@\S+\.\S+/;
    if (!re.test(form.email)) return 'Enter a valid email.';
    if (!form.message.trim()) return 'Message is required.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      setOpen(true);
      return;
    }
    // As a static site, we just show success message
    setForm({ name: '', email: '', message: '' });
    setError('');
    setOpen(true);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 700 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Contact</Typography>

      <TextField label="Name" fullWidth required sx={{ mb: 2 }} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <TextField label="Email" fullWidth required sx={{ mb: 2 }} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <TextField label="Message" fullWidth required multiline rows={5} sx={{ mb: 2 }} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

      <Button type="submit" variant="contained" color="primary">Send Message</Button>

      <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
        {error ? (
          <Alert severity="error" onClose={() => setOpen(false)}>{error}</Alert>
        ) : (
          <Alert severity="success" onClose={() => setOpen(false)}>Message sent (demo)</Alert>
        )}
      </Snackbar>
    </Box>
  );
}
