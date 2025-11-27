import { buildPageMetadata, localBusinessSchema, SITE_NAME, websiteSchema } from '@/app/metadata';
import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import Script from 'next/script';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = buildPageMetadata({
  title: SITE_NAME,
  description: 'Terratech Process',
  path: '/',
});

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
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
