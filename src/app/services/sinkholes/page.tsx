import { buildPageMetadata, buildServiceSchema } from '@/app/metadata';
import Title from '@/app/services/_components/Title';
import Warnings from '@/app/services/_components/Warnings';
import page from '@/data/services/sinkholes.json';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';

// Lazy load below-the-fold components for better initial page load
const Sinkhole = dynamic(() => import('@/app/services/_components/Sinkhole'));
const Advanced = dynamic(() => import('@/app/services/_components/Advanced'));
const Solution = dynamic(() => import('@/app/services/_components/Solution'));

export const generateMetadata = (): Metadata => buildPageMetadata(page.meta);

const Sinkholes = () => {
  const serviceSchema = buildServiceSchema(page.meta);

  return (
    <>
      <Script id="service-schema-sinkholes" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Title />
      <Warnings />
      <Sinkhole />
      <Advanced />
      <Solution />
    </>
  );
};

export default Sinkholes;
