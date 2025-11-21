import Image from 'next/image';
import Link from 'next/link';
import { whyUs } from '../home.json';

const WhyUs = () => {
  const { section, cards } = whyUs;

  return (
    <section className="relative pt-39 pb-20 px-23.5 max-sm:px-10 max-w-[1440] mx-auto bg-linear-to-b from-[#111316] to-[#111216]">
      <p className="text-[17px] tracking-[0.5px]">{section.eyebrow}</p>
      <p className="text-[60px] tracking-[-1.5px] max-sm:text-[35px]  mt-2">{section.title}</p>
      <p className="mt-4 text-[30px] max-sm:text-[18px] tracking-[-0.8px] whitespace-pre-line">
        {section.subtitle}
      </p>

      <div className="grid mt-12 items-stretch xl:grid-cols-4 xl:grid-rows-1 md:grid-cols-2 md:grid-rows-2 max-md:grid-cols-1 max-md:grid-rows-4 gap-5">
        {cards.map((item) => (
          <div
            key={item.title}
            className="flex flex-col bg-graphite p-8 rounded-xl font-sans h-full justify-between"
          >
            <div className="flex flex-col flex-grow">
              <div className="mb-6 relative flex self-center">
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={item.iconWidth}
                  height={item.iconHeight}
                />
              </div>
              <p className="text-[32px]/[38px] max-sm:text-[24px]/[30px] font-medium min-h-[114px]">
                {item.title}
              </p>
              <p className="mt-5 text-[24px]/[33px] max-sm:text-[18px]/[24px] tracking-[0.2px]">
                {item.description}
              </p>
            </div>

            <Link
              href={item.href}
              className="text-[25px] max-sm:text-[18px] mt-6 hover:text-concrete"
            >
              {item.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
