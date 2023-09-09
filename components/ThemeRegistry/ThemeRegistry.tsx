'use client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { FunctionComponent, ReactNode } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './theme';

interface ThemeRegistryProps {
  children: ReactNode;
}
const ThemeRegistry: FunctionComponent<ThemeRegistryProps> = ({ children }) => {
  return (
    <NextAppDirEmotionCacheProvider
      options={{ stylisPlugins: [rtlPlugin], key: 'mui' }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};

export default ThemeRegistry;
