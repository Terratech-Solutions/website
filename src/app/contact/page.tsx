import { buildPageMetadata } from '@/app/metadata';
import page from '@/data/contact.json';
import type { Metadata } from 'next';
import ContactClient from './components/ContactClient';


export const generateMetadata = (): Metadata => buildPageMetadata(page.meta);

const Contact = () => {
  return <ContactClient />;
};

export default Contact;
