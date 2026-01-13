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
            className="flex justify-around items-center w-full pt-20 max-lg:flex-col max-lg:gap-8 rounded-[15px] gap-8"
            style={{
              background: 'linear-gradient(180deg, #272727 0%, #000000 100%)',
            }}
          >
            <div className="flex flex-col items-center w-full max-w-[420px] mx-2">
              <div
                className={`flex flex-col items-center w-full transition-transform duration-300 ease-in-out group
      ${!isMobile ? 'hover:scale-105' : ''}
      ${isMobile && activeIndex === 0 ? 'scale-105' : ''}
    `}
                onClick={() => handleClick(0)}
                style={{ cursor: isMobile ? 'pointer' : 'default' }}
              >
                <Image
                  src={stages[0].image.src}
                  alt={stages[0].image.alt}
                  width={stages[0].image.width}
                  height={stages[0].image.height}
                  loading="lazy"
                  className="max-w-[220px] md:max-w-[320px] w-full h-auto"
                />
                <div className="pt-2 w-full flex justify-center">
                  <div className="text-center text-base font-medium max-w-[260px]">
                    {stages[0].label}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center w-full max-w-[420px] mx-2">
              <div
                className={`flex flex-col items-center w-full transition-transform duration-300 ease-in-out group mb-[21px]
      ${!isMobile ? 'hover:scale-105' : ''}
      ${isMobile && activeIndex === 1 ? 'scale-105' : ''}
    `}
                onClick={() => handleClick(1)}
                style={{ cursor: isMobile ? 'pointer' : 'default' }}
              >
                <Image
                  src={stages[1].image.src}
                  alt={stages[1].image.alt}
                  width={stages[1].image.width}
                  height={stages[1].image.height}
                  loading="lazy"
                  className="max-w-[220px] md:max-w-[320px] w-full h-auto"
                />
                <div className="pt-2 w-full flex justify-center">
                  <div className="text-center text-base font-medium max-w-[260px]">
                    {stages[1].label}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center w-full max-w-[420px] mx-2">
              <div
                className={`flex flex-col items-center w-full transition-transform duration-300 ease-in-out group mb-[7px]
      ${!isMobile ? 'hover:scale-105' : ''}
      ${isMobile && activeIndex === 2 ? 'scale-105' : ''}
    `}
                onClick={() => handleClick(2)}
                style={{ cursor: isMobile ? 'pointer' : 'default' }}
              >
                <Image
                  src={stages[2].image.src}
                  alt={stages[2].image.alt}
                  width={stages[2].image.width}
                  height={stages[2].image.height}
                  loading="lazy"
                  className="max-w-[220px] md:max-w-[320px] w-full h-auto"
                />
                <div className="pt-2 w-full flex justify-center">
                  <div className="text-center text-base font-medium max-w-[260px]">
                    {stages[2].label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
