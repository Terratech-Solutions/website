'use client';

import DropdownItem from '@/app/services/_components/DropdownItem';
import HighlightedText from '@/components/HighlightedText';
import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import Image from 'next/image';

type AccordionWithImageProps = {
  section: {
    sectionLabel: string;
    title: {
      lines: string[];
      highlight: string[] | string;
      highlightColor: string;
    };
  };
  points: {
    title: string;
    description: string;
  }[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const AccordionWithImage = ({ section, points, image }: AccordionWithImageProps) => (
  <div className="px-4 md:px-13.5 pt-13">
    <div
      className="max-w-[1440] mx-auto px-10 md:px-23.5 pt-20 pb-20"
      style={{
        background: 'linear-gradient(180deg, #131313 81.73%, #1D1D1D 100%)',
      }}
    >
      <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>
      <div className="flex flex-col pt-10">
        <div className="text-[40px]/[60px] lg:text-[60px]/[80px] whitespace-pre-line">
          <HighlightedText
            lines={section.title.lines}
            highlight={section.title.highlight}
            highlightColor={section.title.highlightColor}
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="flex flex-col pt-10 gap-0 w-full lg:w-auto">
            {points.map((item, index) => (
              <DropdownItem
                key={item.title}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
          <div className="flex justify-center mt-10 lg:mt-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AccordionWithImage;
