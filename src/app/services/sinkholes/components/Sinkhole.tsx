'use client';

import HighlightedText from '@/components/HighlightedText';
import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import { sinkhole } from '@/data/services/sinkholes.json';
import Image from 'next/image';

const Sinkhole = () => {
  const { section, stages } = sinkhole;

  return (
    <div className="px-4 md:px-13.5 pt-13">
      <div className="max-w-[1440] mx-auto bg-foreground max-sm:px-4 px-23.5 pt-7 pb-7">
        <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>

        <div className="flex flex-col pt-10">
          <div className="text-[60px]/[80px] max-md:text-[40px]/[55px]">
            <HighlightedText
              lines={section.title.lines}
              highlight={section.title.highlight}
              highlightColor={section.title.highlightColor}
            />
          </div>

          <div className="flex justify-around items-center w-full pt-20 max-lg:flex-col max-lg:gap-8">
            {stages.map((stage) => (
              <div key={stage.label} className="flex flex-col items-center">
                <div className="flex relative overflow-hidden rounded-[32px]">
                  <div className="relative">
                    <Image
                      src={stage.image.src}
                      alt={stage.image.alt}
                      width={stage.image.width}
                      height={stage.image.height}
                      loading="lazy"
                      style={{ height: 'auto' }}
                      className="rounded-[32px]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 text-white text-center px-12 py-6 pointer-events-none">
                      <p className="text-base text-lg font-normal leading-snug">{stage.label}</p>
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

export default Sinkhole;
