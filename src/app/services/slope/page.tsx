import { buildPageMetadata, buildServiceSchema } from '@/app/metadata';
import Title from '@/app/services/_components/Title';
import page from '@/data/services/slope.json';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';

// Lazy load below-the-fold components for better initial page load
const AccordionWithImage = dynamic(() => import('@/app/services/_components/AccordionWithImage'));
const BigImageWithDescription = dynamic(
  () => import('@/app/services/_components/BigImageWithDescription'),
);
const ImageWithDescriptionCol = dynamic(
  () => import('@/app/services/_components/ImageWithDescriptionCol'),
);
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
      <ImageWithDescriptionCol {...page.erosionRepair} />
      <AccordionWithImage {...page.accordionData} />
      <BigImageWithDescription {...page.stopErosion} />
      <ImageWithDescriptionCol {...page.identifyProblem} />
      <ContactBlock />
    </>
  );
};

export default Sinkholes;
