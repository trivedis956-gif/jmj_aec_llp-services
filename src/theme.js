import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#64748b',
    },
    text: {
      primary: '#102a43',
      secondary: '#64748b'
    },
    background: {
      default: '#f7f9fc',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h4: {
      fontWeight: 700
    },
    h5: {
      fontWeight: 700
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18
        }
      }
    }
  }
});

export default theme;
