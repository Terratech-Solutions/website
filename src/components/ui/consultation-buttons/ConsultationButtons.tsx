'use client';

import { sendGAEvent } from '@/app/utils/ga';
import Link from 'next/link';
import buttonsData from './consultationButtons.json';

const ConsultationButtons = () => {
  return (
    <div className="flex flex-row gap-x-3 mt-3 max-md:flex-col max-md:gap-x-0 max-md:gap-y-2">
      {buttonsData.buttons.map((btn) => (
        <Link
          key={btn.href}
          href={btn.href}
          aria-label={btn.ariaLabel}
          className={`group outline-none relative ${
            btn.style === 'light' ? 'flex-[2_2_0%]' : 'flex-[1.3_1.3_0%]'
          }`}
          onClick={() => {
            sendGAEvent({
              event: 'consultation_button_click',
              value: 1,
              button_text: btn.bigText,
              location: 'consultation_buttons',
            });
          }}
        >
          <div
            className={
              btn.style === 'light'
                ? 'h-full w-full bg-lemon-green group-hover:bg-zinc-200 rounded-md'
                : 'h-full w-full bg-gradient-to-r from-dark-green to-terra-black group-hover:from-white'
            }
          >
            <div className="text-xs font-medium pt-3 pl-3 group-hover:text-terra-black">
              {btn.smallText}
            </div>
            <div
              className={`mt-0.5 text-base font-semibold pb-3 pl-3 ${
                btn.style === 'light' ? 'pr-8' : 'pr-6'
              } group-hover:text-terra-black`}
            >
              {btn.bigText}
              {btn.arrow && (
                <span
                  className="translate-x-0 transition-transform group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ConsultationButtons;
