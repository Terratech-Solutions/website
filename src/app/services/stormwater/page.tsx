import { buildPageMetadata, buildServiceSchema } from '@/app/metadata';
import Title from '@/app/services/_components/Title';
import page from '@/data/services/stormwater.json';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';

// Lazy load below-the-fold components for better initial page load
const Root = dynamic(() => import('@/app/services/stormwater/components/Root'));
const AccordionWithImage = dynamic(() => import('@/app/services/_components/AccordionWithImage'));
const VideoWithDescriptionCol = dynamic(
  () => import('@/app/services/_components/VideoWithDescriptionCol'),
);
const ContactBlock = dynamic(() => import('@/app/services/_components/ContactBlock'));
const ImageWithDescriptionRow = dynamic(
  () => import('@/app/services/_components/ImageWithDescriptionRow'),
);

export const generateMetadata = (): Metadata => buildPageMetadata(page.meta);

const Sinkholes = () => {
  const serviceSchema = buildServiceSchema(page.meta);

  return (
    <>
      <Script id="service-schema-sinkholes" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Title {...page.title} />
      <ImageWithDescriptionRow {...page.preventBreakdown} />
      <Root />
      <AccordionWithImage {...page.repair} />
      <VideoWithDescriptionCol {...page.reinforce} />
      <ContactBlock />
    </>
  );
};

export default Sinkholes;
