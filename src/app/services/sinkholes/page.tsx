import { buildPageMetadata, buildServiceSchema } from '@/app/metadata';
import Title from '@/app/services/_components/Title';
import Warnings from '@/app/services/sinkholes/components/Warnings';
import page from '@/data/services/sinkholes.json';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';

// Lazy load below-the-fold components for better initial page load
const Sinkhole = dynamic(() => import('@/app/services/sinkholes/components/Sinkhole'));
const AccordionWithImage = dynamic(() => import('@/app/services/_components/AccordionWithImage'));
const VideoWithDescriptionCol = dynamic(
  () => import('@/app/services/_components/VideoWithDescriptionCol'),
);
const Solution = dynamic(() => import('@/app/services/sinkholes/components/Solution'));
const ContactBlock = dynamic(() => import('@/app/services/_components/ContactBlock'));

export const generateMetadata = (): Metadata => buildPageMetadata(page.meta);

const Sinkholes = () => {
  const serviceSchema = buildServiceSchema(page.meta);

  return (
    <>
      <Script id="service-schema-sinkholes" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Title {...page.title} />
      <VideoWithDescriptionCol {...page.longTermSolutions} />
      <Warnings />
      <Sinkhole />
      <AccordionWithImage {...page.accordionData} />
      <Solution />
      <ContactBlock />
    </>
  );
};

export default Sinkholes;
