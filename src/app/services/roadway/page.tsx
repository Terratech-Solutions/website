import { buildPageMetadata, buildServiceSchema } from '@/app/metadata';
import Title from '@/app/services/_components/Title';
import RepairSolutions from '@/app/services/roadway/components/RepairSolutions';
import page from '@/data/services/roadway.json';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';

// Lazy load below-the-fold components for better initial page load
const AccordionWithImage = dynamic(() => import('@/app/services/_components/AccordionWithImage'));
const BigImageWithDescription = dynamic(
  () => import('@/app/services/_components/BigImageWithDescription'),
);
const Solution = dynamic(() => import('@/app/services/roadway/components/Solution'));
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
      <RepairSolutions />
      <BigImageWithDescription {...page.answer} />
      <AccordionWithImage {...page.accordionData} />
      <Solution />
      <ContactBlock />
    </>
  );
};

export default Sinkholes;
