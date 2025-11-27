import Connect from '@/app/contact/components/Connect';
import { buildPageMetadata } from '@/app/metadata';
import RecaptchaProvider from '@/components/RecaptchaProvider';
import page from '@/data/contact.json';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const PhoneForm = dynamic(() => import('@/app/contact/components/PhoneForm'));

export const generateMetadata = (): Metadata => buildPageMetadata(page.meta);

const Contact = () => {
  return (
    <RecaptchaProvider>
      <Connect />
      <PhoneForm />
    </RecaptchaProvider>
  );
};

export default Contact;
