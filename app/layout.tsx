import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Metadata, Viewport } from 'next';

import './globals.css';
import Header from '../components/layout/header';
import { Providers } from '../lib/providers';
import Footer from '../components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Harinath M | Full Stack Developer From Bangalore, India.';
const description =
  'A self-proclaimed developer who specializes in full stack development (Angular, PHP, Laravel,React.js & Node.js, Mysql, MongoDB), from Bangalore, India.';
const url = 'https://harinath.dev';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
  ],
  creator: 'Harinath M',
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: '/images/open-graph-sagar.png',
        width: 1200,
        height: 630,
        alt: 'Harinath M Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@shahsagarm',
    images: '/images/open-graph-sagar.png',
  },
  icons: {
    icon: 'favicon1.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

// Viewport configuration with theme color
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
        {googleAnalyticsId && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
