'use client';

import footerData from '@/data/footer.json';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const { contacts, socials, navSections } = footerData;
  const pathname = usePathname();

  return (
    <footer className="bg-foreground h-[500px] max-sm:h-full max-sm:pb-5">
      <div className="pt-21 max-md:pt-10 flex max-md:flex-col justify-between items-baseline px-23.5 max-sm:px-10">
        <div className="flex items-baseline">
          <Link href="/" className="flex items-center relative w-[278] h-[62px]">
            <Image
              src="/logo.svg"
              alt="Company logo"
              fill
              sizes="(max-width: 768px) 150px, (max-width: 1024px) 190px, 230px"
              className="h-auto w-[150px] md:w-[190px] lg:w-[230px]"
            />
          </Link>
        </div>

        <div className="flex max-sm:flex-col self-start text-sm max-md:pt-5 max-sm:gap-5">
          <ul className="flex flex-col gap-3 pr-10">
            {contacts.map((contact) => (
              <li key={contact.type}>
                <p className="font-bold text-blue-500 text-lg">{contact.type}</p>
                {contact.href ? (
                  <Link href={contact.href}>{contact.value}</Link>
                ) : (
                  <p className="whitespace-pre-line">{contact.value}</p>
                )}
              </li>
            ))}

            <li>
              <ul>
                <li className="font-bold text-blue-500 text-lg">Socials</li>
                {socials.map((social) => (
                  <li key={social.label}>
                    <Link target="_blank" href={social.href}>
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {navSections.map((section) => (
            <ul key={section.title} className="list-none flex flex-col gap-5">
              {section.items.map((item) => (
                <li
                  className={clsx({ 'text-blue-500 text-lg font-bold': pathname === item.href })}
                  key={item.href}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
}
