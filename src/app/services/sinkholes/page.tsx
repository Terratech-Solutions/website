import { buildPageMetadata, buildServiceSchema } from '@/app/metadata';
import Advanced from '@/app/services/_components/Advanced';
import Sinkhole from '@/app/services/_components/Sinkhole';
import Solution from '@/app/services/_components/Solution';
import Title from '@/app/services/_components/Title';
import Warnings from '@/app/services/_components/Warnings';
import page from '@/data/services/sinkholes.json';
import type { Metadata } from 'next';
import Script from 'next/script';

export const generateMetadata = (): Metadata => buildPageMetadata(page.meta);

const Sinkholes = () => {
  const serviceSchema = buildServiceSchema(page.meta);

  return (
    <div>
      <Script id="service-schema-sinkholes" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Title />
      <Warnings />
      <Sinkhole />
      <Advanced />
      <Solution />
    </div>
  );
};

export default Sinkholes;
