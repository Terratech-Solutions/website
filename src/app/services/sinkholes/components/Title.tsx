import { sendGTMEvent } from '@/app/utils/gtm';
import contactData from '@/data/contact.json';
import { title } from '@/data/services/sinkholes.json';
import Image from 'next/image';

type Contact = {
  type: string;
  icon: string;
  label: string;
  value: string;
  href?: string;
};

const Title = () => {
  const { background, text, image, cta } = title;
  const contacts: Contact[] = contactData.phoneFormData.contacts;
  const phoneContact = contacts.find((c) => c.type === 'Phone');

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${background.from}, ${background.to})`,
      }}
    >
      <div className="flex pt-56 max-lg:flex-col pb-30 z-10 max-w-[1440] mx-auto px-23.5 max-md:px-4 justify-between">
        <div className="grid relative grid-flow-row">
          <p className="text-[78px]/[90px] max-lg:text-[50px]/[70px] max-md:text-[40px]/[65px] max-sm:text-[34px]/[50px] font-normal">
            {text.title.lines.map((line, i) => (
              <span key={i}>
                {text.title.highlight.includes(line) ? (
                  <span className={text.title.highlightColor}>{line}</span>
                ) : (
                  line
                )}
                {i !== text.title.lines.length - 1 && <br />}
              </span>
            ))}
          </p>

          <p className="text-[22px]/[150%] font-light mt-7.5 whitespace-pre-line max-w-[500px]">
            {text.subtitle}
          </p>
          <div className="mt-10 flex gap-4 max-sm:flex-col max-sm:items-center">
            <a
              href={phoneContact?.href || cta.freeQuote.href}
              onClick={() => {
                sendGTMEvent({
                  event: 'click_free_quote',
                  value: 1,
                  button_text: 'Call Us now',
                  location: 'hero_section',
                  cta_type: 'free_quote',
                });
              }}
              className="bg-true-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg max-sm:w-full"
            >
              <span>Call Us now</span>
            </a>
          </div>
        </div>

        <div className="flex relative mt-[40px] lg:mt-0">
          <Image
            src={image.src}
            priority
            fetchPriority="high"
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
      </div>
    </section>
  );
};

export default Title;
