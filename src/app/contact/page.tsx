import { buildPageMetadata } from '@/app/metadata';
import page from '@/data/contact.json';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactClient from './components/ContactClient';


export const generateMetadata = (): Metadata => buildPageMetadata(page.meta);

const Contact = () => {
  return (
    <>
      {/* Hidden form for Netlify build detection */}
      <form name="contact" data-netlify="true" data-netlify-recaptcha="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="phone" />
        <select name="source"></select>
        <div data-netlify-recaptcha="true"></div>
      </form>

      <Suspense fallback={<div>Loading...</div>}>
        <ContactClient />
      </Suspense>
    </>
  );
};

export default Contact;
