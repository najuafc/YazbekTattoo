  import { createTheme } from '@mui/material/styles';

  const theme = createTheme({
    palette: {
      primary: {
        main: '#a51d1d',
      },
      secondary: {
        main: '#0b0000',
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
          containedPrimary: {
            backgroundColor: '#7f1616',
            color: 'white',
            '&:hover': {
              backgroundColor: '#7f1616', // Nova cor de fundo ao passar o mouse
            },
          },
        },
      },
    },
  });
  
  export default theme;