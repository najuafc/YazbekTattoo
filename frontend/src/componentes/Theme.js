import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a51d1d',
    },
    secondary: {
      main: '#ffc107',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          borderRadius: 8,
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default theme;
