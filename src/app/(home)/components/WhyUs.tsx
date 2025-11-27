import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import { whyUs } from '@/data/home.json';
import Image from 'next/image';
import Link from 'next/link';

const WhyUs = () => {
  const { section, cards } = whyUs;

  return (
    <section className="relative py-[40px] lg:pt-39 lg:pb-20 md:px-23.5 px-10 max-w-[1440] mx-auto bg-linear-to-b from-[#111316] to-[#111216]">
      <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>
      <div className="text-[30px]/[150%] lg:text-[60px] mt-2">{section.title}</div>
      <p className="mt-4 text-[18px] lg:text-[30px] text-[#C7D1DA] whitespace-pre-line">
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
              <p className="text-[24px] min-h-[70px] font-medium md-min-h-[114px]">{item.title}</p>
              <p className="mt-5 text-[18px] lg:text-[2`0px]">{item.description}</p>
            </div>

            <Link
              href={item.href}
              className="text-[25px] max-sm:text-[18px] mt-6 hover:text-concrete text-[#87acc6]"
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
