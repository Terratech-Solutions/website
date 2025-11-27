import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import { warnings } from '@/data/services/sinkholes.json';
import Image from 'next/image';

const Warnings = () => {
  const { section, items } = warnings;

  return (
    <section className="px-4 md:px-13.5 max-sm:pt-10 pt-33">
      <div className="flex max-lg:flex-col max-w-[1440] р-[560px] mx-auto bg-foreground max-sm:px-4 px-23.5 pt-7 pb-7">
        <div className="flex flex-col w-full justify-between items-stretch">
          <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>

          <div className="flex max-md:flex-col justify-between w-full pb-40 max-lg:pb-15">
            <div className="flex flex-col pt-10 max-md:pb-10">
              <div className="text-[60px]/[80px] max-xl:text-[40px]/[55px]">
                {section.title.main}{' '}
                <span className="text-true-red">{section.title.highlight}</span> <br />
                {section.title.after}
              </div>

              <div className="text-[14px] max-w-[480px] pt-15">{section.description}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:pl-10 text-[22px] justify-around lg:border-l-2 border-solid border-zinc-200 max-lg:border-t-2 max-lg:pt-10 max-lg:gap-4">
          {items.map((item) => (
            <div key={item.title} className="flex items-center">
              <Image
                src={item.iconSrc}
                alt={item.title}
                width={item.iconWidth}
                height={item.iconHeight}
                loading="eager"
              />
              <div className="pl-4 lg:whitespace-nowrap">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Warnings;
