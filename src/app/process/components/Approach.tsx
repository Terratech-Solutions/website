import dynamic from 'next/dynamic';
import { approach } from '@/data/process.json';

const SectionCard = dynamic(() => import('@/app/process/components/ui/SectionCard'));

const Approach = () => {
  const { section } = approach;

  return (
    <section className="flex flex-col px-23.5 pb-30 mx-auto max-w-[1440] max-lg:px-2.5">
      <div className="pt-24">{section.eyebrow}</div>

      <div className="flex flex-col pt-10">
        <div className="text-[50px]/[60px] whitespace-pre-line">
          {section.title.beforeHighlight}{' '}
          <span className="text-lemon-green">{section.title.highlight}</span>{' '}
          {section.title.afterHighlight}
        </div>

        <div className="pt-6.5">{section.description}</div>
      </div>

      <SectionCard />
    </section>
  );
};

export default Approach;
