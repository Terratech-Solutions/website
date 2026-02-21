'use client';

import { sendGTMEvent } from '@/app/utils/gtm';
import footerData from '@/data/footer.json';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const { contacts, socials, navSections } = footerData;
  const pathname = usePathname();

  const handleNavClick = (item: { href: string; label: string }) => {
    sendGTMEvent({
      event: 'footer_nav_click',
      href: item.href,
      label: item.label,
      location: 'footer_nav_section',
    });
  };

  const handleSocialClick = (social: { href: string; label: string }) => {
    sendGTMEvent({
      event: 'footer_social_click',
      href: social.href,
      label: social.label,
      location: 'footer_socials_section',
    });
  };

  const handleContactClick = (contact: { type: string; href: string; value: string }) => {
    sendGTMEvent({
      event: 'footer_contact_click',
      contact_type: contact.type,
      href: contact.href,
      value: contact.value,
      location: 'footer_contacts_section',
    });
  };

  return (
    <footer className="bg-foreground min-h-[500px] max-sm:h-full pb-5">
      <div className="pt-21 max-md:pt-10 flex max-md:flex-col justify-between items-baseline md:px-23.5 px-10 max-w-[1440px] mx-auto">
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
                  <Link href={contact.href} onClick={() => handleContactClick(contact)}>
                    {contact.value}
                  </Link>
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
                    <Link
                      target="_blank"
                      href={social.href}
                      onClick={() => handleSocialClick(social)}
                    >
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
                  <Link href={item.href} onClick={() => handleNavClick(item)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
}
