'use client';

import { sendGTMEvent } from '@/app/utils/gtm';
import contactData from '@/data/contact.json';
import page from '@/data/home.json';
import Image from 'next/image';
import Link from 'next/link';

type Contact = {
  type: string;
  icon: string;
  label: string;
  value: string;
  href?: string;
};

const Introducing = () => {
  const { title, value, cta } = page.introducing;
  const { part1, part2, part3, part4 } = title;
  const contacts: Contact[] = contactData.phoneFormData.contacts;
  const phoneContact = contacts.find((c) => c.type === 'Phone');
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
      <div className="grid relative grid-flow-row pt-56 md:px-23.5 px-10 pb-30 z-10 max-w-[1440] mx-auto">
        <p className="text-[78px]/[90px] max-lg:text-[50px]/[70px] max-md:text-[40px]/[65px] max-sm:text-[34px]/[50px] font-normal">
          <span className="text-true-red">{part1}</span> <br />
          {part2} <br />
          <span className="text-true-red">{part3}</span> {part4}
        </p>

        <p className="text-[22px]/[150%] font-light mt-7.5 ">{value}</p>
        <div className="mt-10 flex gap-4 max-sm:flex-col">
          <a
            href={phoneContact?.href || '#'}
            onClick={() => {
              sendGTMEvent({
                event: 'introducing_cta_click',
                button_text: cta.freeQuote.content,
                location: 'introducing_section',
              });
            }}
            className="bg-true-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg max-sm:w-full"
          >
            <span className="pr-2">{cta.freeQuote.content}</span> &rarr;
          </a>
          <Link
            href={cta.learnProcess.href}
            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 max-sm:px-4 max-sm:py-3 rounded-lg font-semibold text-lg transition-all flex items-center justify-center space-x-2 max-sm:w-full w-auto"
            onClick={() => {
              sendGTMEvent({
                event: 'learn_about_process',
                button_text: cta.learnProcess.content,
                location: 'introducing_section',
              });
            }}
          >
            {cta.learnProcess.content}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Introducing;
