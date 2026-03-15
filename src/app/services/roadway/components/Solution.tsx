import HighlightedText from '@/components/HighlightedText';
import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import { solution } from '@/data/services/roadway.json';
import Image from 'next/image';

const Solution = () => {
  const { section, images } = solution;

  return (
    <div className="px-4 md:px-13.5 pt-13">
    <div className="max-w-[1440px] mx-auto px-10 md:px-23.5 pt-7 pb-20">
      <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>
      <div className="flex flex-col pt-6 md:pt-10">
        <div className="text-[28px]/[36px] sm:text-[40px]/[50px] md:text-[60px]/[80px] font-semibold whitespace-pre-line">
          <HighlightedText
            lines={section.title.lines}
            highlight={section.title.highlight}
            highlightColor={section.title.highlightColor}
            lineColors={section.title.lineColors}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-8 md:pt-16 lg:pt-20">
          {[0, 1].map((i) => (
            <div key={images[i].src} className="flex-1 flex flex-col items-center w-full">
              <Image
                src={images[i].src}
                alt={images[i].alt}
                width={images[i].width}
                height={images[i].height}
                loading="lazy"
                className="object-contain w-full max-w-[320px] sm:max-w-[400px] md:max-w-none h-auto"
              />
            </div>
          ))}
        </div>
        <div className="whitespace-pre-line mt-10 md:mt-14 text-start text-base sm:text-lg md:text-[18px]/[150%] text-neutral-200 w-full max-w-none ml-0">
          {section.description}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Solution;
