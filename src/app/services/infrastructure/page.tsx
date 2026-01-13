import { buildPageMetadata, buildServiceSchema } from '@/app/metadata';
import Title from '@/app/services/_components/Title';
import page from '@/data/services/infrastructure.json';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';

// Lazy load below-the-fold components for better initial page load
const Solution = dynamic(() => import('@/app/services/infrastructure/components/Solution'));
const VideoWithDescriptionRow = dynamic(
  () => import('@/app/services/_components/VideoWithDescriptionRow'),
);
const ImageWithDescriptionCol = dynamic(
  () => import('@/app/services/_components/ImageWithDescriptionCol'),
);
const AccordionWithImage = dynamic(() => import('@/app/services/_components/AccordionWithImage'));
const ContactBlock = dynamic(() => import('@/app/services/_components/ContactBlock'));

export const generateMetadata = (): Metadata => buildPageMetadata(page.meta);

const Infrastructure = () => {
  const serviceSchema = buildServiceSchema(page.meta);

  return (
    <>
      <Script id="service-schema-sinkholes" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Title {...page.title} />
      <VideoWithDescriptionRow {...page.effectiveRepair} />
      <ImageWithDescriptionCol {...page.reinforceMitigate} />
      <AccordionWithImage {...page.crumbling} />
      <Solution {...page.solution} />
      <ContactBlock />
    </>
  );
};

export default Infrastructure;
