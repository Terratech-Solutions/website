'use client';

import HighlightedText from '@/components/HighlightedText';
import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import Image from 'next/image';

type SolutionProps = {
  section: {
    sectionLabel: string;
    title: {
      lines: string[];
      highlight: string[] | string;
      highlightColor: string;
    };
    description: string;
  };
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
};

const Solution = ({ section, images }: SolutionProps) => {
  return (
    <div className="px-4 md:px-13.5 pt-20 pb-20 max-w-[1440px] mx-auto">
      <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>

      <div className="text-[40px]/[55px] md:text-[60px]/[80px] font-normal mt-10">
        <HighlightedText
          lines={section.title.lines}
          highlight={section.title.highlight}
          highlightColor={section.title.highlightColor}
        />
      </div>

      {images[0] && (
        <div className="flex justify-end mt-20 mb-10">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={images[0].width}
            height={images[0].height}
            loading="lazy"
            className="max-w-full"
          />
        </div>
      )}

      {images[1] && (
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-10">
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[18px]/[32px] md:text-[24px]/[40px] md:tracking-wide text-white">
              Void gets filled, fixing root cause.
            </p>
            <p className="text-[18px]/[32px] md:text-[24px]/[40px] md:tracking-wide text-white mt-4">
              Please add some copy here so
            </p>
            <p className="text-[18px]/[32px] md:text-[24px]/[40px] md:tracking-wide text-white">
              The page layout looks good.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              width={images[1].width}
              height={images[1].height}
              loading="lazy"
              className="max-w-full"
            />
          </div>
        </div>
      )}

      <div className="text-[18px]/[32px] md:text-[22px]/[36px] text-gray-300 mt-20 max-w-[900px]">
        {section.description}
      </div>
    </div>
  );
};

export default Solution;
