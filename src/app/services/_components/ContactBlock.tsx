'use client';

import { sendGAEvent } from '@/app/utils/ga';
import ConsultationButtons from '@/components/ui/consultation-buttons/ConsultationButtons';
import contact from '@/data/contact.json';

interface ContactBlockProps {
  showBackground?: boolean;
}

const ContactBlock = ({ showBackground = true }: ContactBlockProps) => (
  <div className={showBackground ? 'px-4 md:px-13.5 pt-13' : ''}>
    <div
      className={`flex max-lg:flex-col max-w-[1440px] mx-auto ${showBackground ? 'bg-foreground max-sm:px-4 px-25.5 pt-7 pb-7' : ''}`}
    >
      <div
        className="
          bg-black text-white flex flex-col
          max-w-[830px] min-h-[335px] p-[40px]
          sm:max-w-full sm:min-h-0 sm:h-auto
        "
      >
        <h2
          className="
            text-[36px] font-bold mb-8 leading-tight
             sm:mb-5
          "
        >
          Get in touch for a consultation
        </h2>
        <a
          href={`tel:${contact.phone}`}
          className="
            mb-10 px-7 py-3 bg-true-red text-white font-semibold rounded-lg
            transition hover:bg-red-600 focus:outline-none
            w-fit text-base
            sm:mb-6 sm:px-5 sm:py-2.5 sm:text-sm
          "
          onClick={() => {
            sendGAEvent({
              event: 'call_us_click',
              button_text: 'Call Us',
              location: 'contact_block_section',
            });
          }}
        >
          Call Us!
        </a>
        <div className="w-[80%]">
          <ConsultationButtons />
        </div>
      </div>
    </div>
  </div>
);

export default ContactBlock;
