import contactData from '@/data/contact.json';
import Image from 'next/image';

type Contact = {
  type: string;
  icon: string;
  label: string;
  value: string;
  href?: string;
};

type TitleProps = {
  background: { from: string; to: string };
  text: {
    title: {
      lines: string[];
      highlight: string[] | string;
      highlightColor: string;
    };
    subtitle: string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  cta: {
    freeQuote: {
      content: string;
      href: string;
    };
  };
};

const Title = ({ background, text, image, cta }: TitleProps) => {
  const highlights = Array.isArray(text.title.highlight)
    ? text.title.highlight
    : [text.title.highlight];

  const contacts: Contact[] = contactData.phoneFormData.contacts;
  const phoneContact = contacts.find((c) => c.type === 'Phone');

  const highlightWords = (line: string) => {
    const parts = line.split(/(\s+)/);

    return parts.map((part, index) => {
      const shouldHighlight = highlights.find((highlight) => part.includes(highlight));

      if (shouldHighlight && part.trim()) {
        return (
          <span key={index} className={text.title.highlightColor}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

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
                {highlightWords(line)}
                {i !== text.title.lines.length - 1 && <br />}
              </span>
            ))}
          </p>

          <p className="text-[22px]/[150%] font-light mt-7.5 whitespace-pre-line max-w-[500px]">
            {text.subtitle}
          </p>
          <div className="mt-10 flex gap-4 max-sm:flex-col max-sm:items-center">
            <a
              href={phoneContact?.href || '#'}
              className="bg-true-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg max-sm:w-full"
            >
              <span className="pr-2">{cta.freeQuote.content}</span> &rarr;
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
