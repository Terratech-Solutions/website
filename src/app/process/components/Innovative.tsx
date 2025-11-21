import dynamic from 'next/dynamic';
import Image from 'next/image';
import { innovative } from '../process.json';

const Accordion = dynamic(() => import('@/app/process/components/ui/Accordion'));

const Innovative = () => {
  const { section, tabs } = innovative;

  return (
    <section className="px-13.5 max-md:px-2.5 pt-17 pb-23">
      <div className="flex flex-col mx-auto max-w-[1440] bg-foreground max-sm:px-5 max-lg:px-10 px-23.5 pt-7 pb-7">
        <div className="">{section.eyebrow}</div>

        <div className="flex justify-between pt-10 max-md:flex-col">
          <div
            className="text-[64px]/[60px] max-sm:text-[50px]/[60px]"
            dangerouslySetInnerHTML={{ __html: section.title }}
          />

          <div className="relative text-[16px] max-w-[300px] pt-7 mr-30">
            <div className="absolute -top-8 -left-10 max-md:hidden">
              <Image src={section.badgeIcon} alt="cross image" width={35} height={35} />
            </div>
            {section.description}
          </div>
        </div>

        <div className="pt-20">
          <Accordion tabs={tabs} />
        </div>
      </div>
    </section>
  );
};

export default Innovative;
