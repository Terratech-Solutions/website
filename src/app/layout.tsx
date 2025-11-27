import {
  DEFAULT_OG_IMAGE,
  localBusinessSchema,
  SITE_NAME,
  SITE_URL,
  websiteSchema,
} from '@/app/metadata';
import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import Script from 'next/script';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Terratech',
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: SITE_NAME,
    description: 'Terratech',
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: 'Terratech',
    images: [DEFAULT_OG_IMAGE],
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="bg-terra-black">
      <body className={`antialiased bg-terra-black`}>
        {typeof gaId === 'string' && <GoogleAnalytics gaId={gaId} />}
        <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteSchema)}
        </Script>
        <Script id="local-business-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(localBusinessSchema)}
        </Script>
        <div className="bg-terra-black">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
