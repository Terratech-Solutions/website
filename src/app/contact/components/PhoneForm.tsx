'use client';

import { phoneFormData } from '@/data/contact.json';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useState } from 'react';

const PhoneForm = () => {
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [showIframe, setShowIframe] = useState(false);

  setTimeout(() => {
    setShowIframe(true);
  }, 300);


  const field =
    'w-full bg-[#1d1d1d] text-white placeholder-zinc-400 border border-white/30 focus:border-white/60 outline-none rounded-sm px-4 py-4 transition-colors';

  return (
    <div className="flex justify-around items-center py-20 px-30 max-md:px-3 max-xl:flex-col  mx-auto max-w-[1440] min-h-[860px]">
      <div className="flex flex-col w-full">
        <form name="contact" method="POST" data-netlify="true" className="p-6 space-y-5 w-full" noValidate>
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <input
              aria-label="Name"
              placeholder={phoneFormData.form.placeholders.name}
              className={field}
              name="name"
              required
            />
          </div>

          <div>
            <input
              aria-label="Email"
              placeholder={phoneFormData.form.placeholders.email}
              className={field}
              type="email"
              name="email"
            />
          </div>

          <div>
            <input
              aria-label="Phone number"
              placeholder={phoneFormData.form.placeholders.phone}
              className={field}
              name="phone"
              required
            />
          </div>

          <div className="relative">
            <select
              aria-label="How did you find us?"
              className={`${field} appearance-none pr-10`}
              defaultValue=""
              name="source"
            >
              <option value="" disabled>
                {phoneFormData.form.placeholders.source}
              </option>
              {phoneFormData.form.sources.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <span
              aria-hidden
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
            >
              ▾
            </span>
          </div>

          <button
            type="submit"
            className="w-full uppercase font-semibold py-4 rounded-sm bg-[#c44237] hover:bg-[#b53a30]"
          >
            {phoneFormData.form.button.default}
          </button>
          {status === 'ok' && (
            <p className="text-sm text-green-400">{phoneFormData.form.messages.success}</p>
          )}
          {status === 'error' && <p className="text-sm text-red-400">{error}</p>}
        </form>

        <div
          className="flex w-full px-6 justify-around max-md:flex-col"
          style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 300px' }}
        >
          {phoneFormData.contacts.map((item) => (
            <div key={item.type} className="flex mt-3 max-md:mt-4">
              <div className="flex relative">
                <Image
                  src={item.icon}
                  alt={item.type}
                  width={23}
                  height={23}
                  className="w-auto h-auto"
                />
              </div>
              <div className="flex flex-col pl-3">
                <div>{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="text-lemon-green">
                    {item.value}
                  </a>
                ) : (
                  <div className="text-lemon-green">{item.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex relative w-full max-xl:justify-center max-xl:pt-10 max-sm:px-2">
        {showIframe && (
          <iframe
            src={phoneFormData.map.src}
            width={phoneFormData.map.width}
            className={phoneFormData.map.heightClass}
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default PhoneForm;
