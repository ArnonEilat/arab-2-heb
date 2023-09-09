import { Roboto, Alef } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const alef = Alef({
  weight: ['400', '700'],
  subsets: ['hebrew'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  direction: 'rtl',
  components: {
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => {
          if (ownerState.variant === 'h6') {
            return { fontFamily: alef.style.fontFamily };
          }
        },
      },
    },
  },
});

export default theme;
