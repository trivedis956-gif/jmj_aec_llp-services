import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0b3d91', // dark blue
    },
    secondary: {
      main: '#6b7280', // steel gray
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(',')
  }
});

export default theme;
