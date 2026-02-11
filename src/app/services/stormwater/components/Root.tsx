'use client';

import HighlightedText from '@/components/HighlightedText';
import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import { root } from '@/data/services/stormwater.json';
import Image from 'next/image';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const Root = () => {
  const { section, stages } = root;
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <div className="px-4 md:px-13.5 pt-13 pb-13">
      <div className="max-w-[1440px] mx-auto bg-foreground max-sm:px-4 px-23.5 pt-7 pb-7">
        <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>
        <div className="flex flex-col pt-10 gap-16 md:gap-20">
          <div className="text-[60px]/[80px] max-md:text-[40px]/[55px]">
            <HighlightedText
              lines={section.title.lines}
              highlight={section.title.highlight}
              highlightColor={section.title.highlightColor}
            />
          </div>
          <div
            className="flex justify-around items-end w-full pt-20 max-lg:flex-col max-lg:gap-8 max-lg:items-center rounded-[15px] gap-8"
            style={{
              background: 'linear-gradient(180deg, #272727 0%, #000000 100%)',
            }}
          >
            {stages.map((stage, idx) => (
              <div key={idx} className="flex flex-col w-full max-w-[420px] mx-2 items-center">
                <div
                  className={`flex flex-col w-full transition-transform duration-300 ease-in-out group items-center
                    ${!isMobile ? 'hover:scale-105' : ''}
                    ${isMobile && activeIndex === idx ? 'scale-105' : ''}
                  `}
                  onClick={() => handleClick(idx)}
                  style={{ cursor: isMobile ? 'pointer' : 'default' }}
                >
                  <Image
                    src={stage.image.src}
                    alt={stage.image.alt}
                    width={stage.image.width}
                    height={stage.image.height}
                    loading="lazy"
                    className="max-w-[220px] md:max-w-[320px] w-full h-auto"
                  />
                  <div className="pt-2 w-full flex justify-center mt-[-30px] pb-[10px] items-center">
                    <div className="text-center text-base font-medium max-w-[260px]">
                      {stage.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
