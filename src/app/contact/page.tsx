import Connect from '@/app/contact/components/Connect';
import { buildPageMetadata } from '@/app/metadata';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import page from '@/data/contact.json';

const PhoneForm = dynamic(() => import('@/app/contact/components/PhoneForm'));

export const generateMetadata = (): Metadata =>  buildPageMetadata(page.meta);

const Contact = () => {
  return (
    <div>
      <Connect />
      <PhoneForm />
    </div>
  );
};

export default Contact;
