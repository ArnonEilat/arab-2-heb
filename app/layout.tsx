import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import { FunctionComponent, ReactNode } from 'react';

import TranslateIcon from '@mui/icons-material/Translate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'תעתיק ערבי עברי',
  description: 'תעתיק טקסט מערבית לעברית',
  applicationName: '',
  authors: [{ url: 'facebook.com/arnon.eilat', name: 'Arnon Eilat' }],
  keywords: [
    'ערבית',
    'עברית',
    'תעתיק',
    'תעתיק מערבית לעבריתֿ',
    'Arabic to Hebrew transliteration',
    'transliteration from Arabic to Hebrew',
  ],
  themeColor: 'black',
  category: 'Tools',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="he" translate="no" dir="rtl">
      <body>
        <ThemeRegistry>
          <AppBar position="static">
            <Toolbar>
              <TranslateIcon sx={{ mr: 2, transform: 'translateY(-2px)' }} />
              <Typography variant="h6" noWrap>
                תעתיק ערבי עברי
              </Typography>
            </Toolbar>
          </AppBar>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
