import ConsultationButtons from '@/components/ui/consultation-buttons/ConsultationButtons';
import Image from 'next/image';
import { solution } from '@/data/services/sinkholes.json';

const Solution = () => {
  const { section, images } = solution;

  return (
    <div className="max-w-[1440] mx-auto px-4 md:px-23.5 pt-20 pb-20">
      <div>{section.eyebrow}</div>

      <div className="flex flex-col pt-10">
        <div className="text-[60px]/[80px] max-md:text-[40px]/[50px] max-sm:text-[24px]/[30px] whitespace-pre-line">
          {section.title.main} <br />
          <span className="text-true-red">{section.title.highlight} </span>
          {section.title.after}
        </div>

        <div className="flex justify-between max-sm:gap-2 pt-20 max-md:flex-col max-md:items-center">
          {images.map((img) => (
            <div key={img.src} className="flex relative max-sm:px-15 max-sm:py-5">
              <Image src={img.src} alt={img.alt} width={img.width} height={img.height} />
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-10">
          <div className="text-[24px]/[58px] max-sm:text-[16px] whitespace-pre-line max-sm:whitespace-normal text-right max-md:text-center">
            {section.description}
          </div>
        </div>

        <div className="pt-40 max-sm:pt-15">
          <ConsultationButtons />
        </div>
      </div>
    </div>
  );
};

export default Solution;
