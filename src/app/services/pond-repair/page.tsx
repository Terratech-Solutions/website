import { buildPageMetadata, buildServiceSchema } from '@/app/metadata';
import Title from '@/app/services/_components/Title';
import page from '@/data/services/pond-repair.json';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const ImageWithDescriptionRow = dynamic(
  () => import('@/app/services/_components/ImageWithDescriptionRow'),
);
const ImageWithDescriptionCol = dynamic(
  () => import('@/app/services/_components/ImageWithDescriptionCol'),
);
const VideoWithDescriptionRow = dynamic(
  () => import('@/app/services/_components/VideoWithDescriptionRow'),
);
const AccordionWithImage = dynamic(() => import('@/app/services/_components/AccordionWithImage'));
const VideoWithDescriptionCol = dynamic(
  () => import('@/app/services/_components/VideoWithDescriptionCol'),
);
const ContactBlock = dynamic(() => import('@/app/services/_components/ContactBlock'));

export const generateMetadata = (): Metadata => buildPageMetadata(page.meta);

const PondRepair = () => {
  const serviceSchema = buildServiceSchema(page.meta);

  return (
    <>
      <Script id="service-schema-pond-repair" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Title {...page.title} />
      <ImageWithDescriptionRow {...page.drainStructures} />
      <VideoWithDescriptionCol {...page.leakingPipes} />
      <VideoWithDescriptionCol {...page.hydrostaticLeaks} />
      <AccordionWithImage {...page.slopeStabilization} />
      <ImageWithDescriptionCol {...page.spillwayRepair} />
      <ContactBlock />
    </>
  );
};

export default PondRepair;
