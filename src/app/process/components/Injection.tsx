'use client';

import { sendGTMEvent } from '@/app/utils/gtm';
import contactData from '@/data/contact.json';
import { injection } from '@/data/process.json';
import Image from 'next/image';

type Contact = {
  type: string;
  icon: string;
  label: string;
  value: string;
  href?: string;
};

const Injection = () => {
  const { title, subtitle } = injection;

  const contacts: Contact[] = contactData.phoneFormData.contacts;
  const phoneContact = contacts.find((c) => c.type === 'Phone');

  const handleCtaClick = () => {
    sendGTMEvent({
      event: 'process_injection_cta_click',
      cta_id: 'freeQuote',
      cta_label: 'Call Us now',
      location: 'process_injection_section',
    });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/home-top-image.png"
          alt="Background"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="grid relative grid-flow-row pt-56 max-sm:px-10 pb-30 z-10 max-w-[1440] px-23.5 mx-auto">
        <p
          className="text-[78px]/[90px] max-lg:text-[50px]/[70px] max-md:text-[40px]/[65px] max-sm:text-[34px]/[50px] font-normal"
          dangerouslySetInnerHTML={{ __html: title.lines.join('<br />') }}
        />

        <p className="text-[22px]/[150%] font-light mt-7.5 whitespace-pre-line">{subtitle}</p>
        <div className="mt-10 flex gap-4 max-sm:flex-col max-sm:items-center">
          <a
            href={phoneContact?.href || '#'}
            className="bg-true-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg max-sm:w-full"
            onClick={handleCtaClick}
          >
            <span className="pr-2">Call Us now</span>&rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Injection;
