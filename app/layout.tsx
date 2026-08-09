import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { LanguageProvider } from './contexts/LanguageContext';
import { CONFIG } from '@/config/constants';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const title = 'WebNR — Private Offline TXT Reader';
const description = 'Read your own TXT books in the browser. WebNR works offline, stores books and reading progress locally, requires no account, and includes text-to-speech and customizable reading modes.';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: CONFIG.PWA.THEME_COLOR,
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.CANONICAL_DOMAIN),
  applicationName: 'WebNR',
  title,
  description,
  category: 'books',
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title,
    description,
    url: CONFIG.CANONICAL_DOMAIN,
    siteName: 'WebNR',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
  appleWebApp: {
    capable: true,
    title: 'WebNR',
    statusBarStyle: 'default',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WebNR',
  url: CONFIG.CANONICAL_DOMAIN,
  applicationCategory: 'BookApplication',
  operatingSystem: 'Any modern web browser',
  description,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Local TXT import with common text encodings',
    'Offline progressive web app',
    'Local reading progress',
    'Text-to-speech',
    'Paged and scrolling reading modes',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href={CONFIG.PWA.ICON_192} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-white px-4 py-2 text-gray-950 shadow focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <LanguageProvider initialLang="en">
          {children}
        </LanguageProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.ANALYTICS.GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              // The site owner explicitly requires the complete browser URL,
              // including import and other query parameters, to be reported.
              gtag('config', '${CONFIG.ANALYTICS.GOOGLE_ANALYTICS_ID}', {
                page_location: window.location.href,
                page_path: window.location.pathname + window.location.search,
                page_title: document.title,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `,
          }}
        />
        <Script
          id="register-service-worker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                var registerWebNRServiceWorker = function () {
                  navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(function (error) {
                    console.error('Service worker registration failed:', error);
                  });
                };

                if (document.readyState === 'complete') {
                  registerWebNRServiceWorker();
                } else {
                  window.addEventListener('load', registerWebNRServiceWorker, { once: true });
                }
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
