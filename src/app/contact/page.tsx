import Connect from '@/app/contact/components/Connect';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { contactMeta } from '../../data/meta.json';

const PhoneForm = dynamic(() => import('@/app/contact/components/PhoneForm'));

export const metadata: Metadata = {
  title: contactMeta.title,
  description: contactMeta.description,
};

const Contact = () => {
  return (
    <div>
      <Connect />
      <PhoneForm />
    </div>
  );
};

export default Contact;
