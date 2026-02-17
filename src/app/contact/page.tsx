import { buildPageMetadata } from '@/app/metadata';
import page from '@/data/contact.json';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactClient from './components/ContactClient';


export const generateMetadata = (): Metadata => buildPageMetadata(page.meta);

const Contact = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactClient />
    </Suspense>
  );
};

export default Contact;
