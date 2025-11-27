import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
const SITE_NAME = 'Terratech';
const DEFAULT_OG_IMAGE = new URL('/logo.svg', SITE_URL).toString();

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
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  image: DEFAULT_OG_IMAGE,
  url: SITE_URL,
  email: 'info@terratechsolutions.net',
  telephone: '+1 980-310-6340',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '401 Hawthorne Lane Suite 110, Mailbox #114',
    addressLocality: 'Charlotte',
    addressRegion: 'NC',
    postalCode: '28204',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.facebook.com/TerraTechsolut/',
    'https://www.instagram.com/terratechsol/',
    'https://www.linkedin.com/company/terratech-sol',
  ],
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
      telephone: '+1 980-310-6340',
      areaServed: {
        '@type': 'State',
        name: 'North Carolina',
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
