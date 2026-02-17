'use client';

import Connect from '@/app/contact/components/Connect';
import { buildPageMetadata } from '@/app/metadata';
import RecaptchaProvider from '@/components/RecaptchaProvider';
import page from '@/data/contact.json';
import type { Metadata } from 'next';


export const generateMetadata = (): Metadata => buildPageMetadata(page.meta);




// Hidden static Netlify form for build-time detection
export const HiddenNetlifyForm = () => (
  <form name="contact" data-netlify="true" hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <input type="text" name="phone" />
    <select name="source">
      <option value="">Source</option>
    </select>
  </form>
);

import dynamic from 'next/dynamic';

const Contact = () => {
  const PhoneForm = dynamic(() => import('@/app/contact/components/PhoneForm'));
  return (
    <>
      <HiddenNetlifyForm />
      <RecaptchaProvider>
        <Connect />
        <PhoneForm />
      </RecaptchaProvider>
    </>
  );
};

export default Contact;
