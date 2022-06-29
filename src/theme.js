import { createTheme } from '@mui/material/styles';
import { red, green } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: '#e2e2e2',
    },
    error: {
      main: red[500],
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
