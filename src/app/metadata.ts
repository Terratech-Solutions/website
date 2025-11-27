import metadataConfig from '@/data/metadata.json';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
const SITE_NAME = metadataConfig.siteName;
const DEFAULT_OG_IMAGE = new URL(metadataConfig.seo.defaultOgImage, SITE_URL).toString();

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}${metadataConfig.seo.searchAction.target}`,
    'query-input': metadataConfig.seo.searchAction.queryInput,
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  image: DEFAULT_OG_IMAGE,
  url: SITE_URL,
  email: metadataConfig.business.email,
  telephone: metadataConfig.business.telephone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: metadataConfig.business.address.streetAddress,
    addressLocality: metadataConfig.business.address.addressLocality,
    addressRegion: metadataConfig.business.address.addressRegion,
    postalCode: metadataConfig.business.address.postalCode,
    addressCountry: metadataConfig.business.address.addressCountry,
  },
  sameAs: metadataConfig.business.socialMedia,
};

export const buildServiceSchema = ({ title, description, path }: PageMetadataInput) => {
  const url = new URL(path, SITE_URL).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      url: SITE_URL,
      telephone: metadataConfig.business.telephone,
      areaServed: {
        '@type': metadataConfig.business.areaServed.type,
        name: metadataConfig.business.areaServed.name,
      },
    },
    serviceType: title,
  };
};

export const buildPageMetadata = ({ title, description, path }: PageMetadataInput): Metadata => {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
};

export { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL };
