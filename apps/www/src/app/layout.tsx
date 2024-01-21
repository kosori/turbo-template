import type { Metadata, Viewport } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { cn } from '@kosori/ui';
import { ThemeProvider } from '@kosori/ui/theme';

import { env } from '~/env';

import '~/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === 'production'
      ? 'https://ui.codingcodax.dev'
      : 'http://localhost:3000',
  ),
  title: 'kosori/ui',
  description: 'Build high quality and accessible apps in a short time.',
  openGraph: {
    title: 'kosori/ui',
    description: 'Build high quality and accessible apps in a short time.',
    url: 'https://ui.codingcodax.dev',
    siteName: 'UI',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@codingcodax',
    creator: '@codingcodax',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

const RootLayout = (props: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
