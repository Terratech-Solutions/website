import GAProvider from '@/app/ga-provider';
import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
import RecaptchaProvider from '@/components/RecaptchaProvider';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Terratech',
    template: '%s | Terratech',
  },
  description: 'Terratech',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" className="bg-terra-black">
      <body className={`antialiased bg-terra-black`}>
        <RecaptchaProvider>
          <div className="bg-terra-black">
            <Header />
            {children}
            <Suspense fallback={null}>
              <GAProvider />
            </Suspense>
            {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
            <Footer />
          </div>
        </RecaptchaProvider>
      </body>
    </html>
  );
}
