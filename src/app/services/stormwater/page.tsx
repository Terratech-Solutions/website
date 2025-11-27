import { buildPageMetadata, buildServiceSchema } from '@/app/metadata';
import Advanced from '@/app/services/_components/Advanced';
import Sinkhole from '@/app/services/_components/Sinkhole';
import Solution from '@/app/services/_components/Solution';
import Title from '@/app/services/_components/Title';
import Warnings from '@/app/services/_components/Warnings';
import page from '@/data/services/stormwater.json';
import type { Metadata } from 'next';
import Script from 'next/script';

export const generateMetadata = (): Metadata => buildPageMetadata(page.meta);

const Stormwater = () => {
  const serviceSchema = buildServiceSchema(page.meta);

  return (
    <>
      <Script id="service-schema-stormwater" type="application/ld+json" strategy="afterInteractive">
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

export default Stormwater;
