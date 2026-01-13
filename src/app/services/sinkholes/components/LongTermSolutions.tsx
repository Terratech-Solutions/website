'use client';

import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import { longTermSolutions } from '@/data/services/sinkholes.json';
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';

const LongTermSolutions = () => {
  const { section, image } = longTermSolutions;
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="px-4 md:px-13.5 pt-13">
      <div className="flex max-lg:flex-col max-w-[1440px] mx-auto bg-foreground max-sm:px-4 px-23.5 pt-7 pb-7">
        <div className="flex flex-col flex-auto justify-between items-stretch">
          <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>
          <div className="flex max-md:flex-col justify-start w-full">
            <div className="flex flex-col pt-10 max-md:pb-10 w-full">
              <div className="text-[60px]/[80px] max-xl:text-[40px]/[55px]">
                {section.title.main} <br />
                <span className="text-true-red">{section.title.highlight}</span>{' '}
              </div>
              <div className="flex justify-center w-full">
                <video
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    display: 'block',
                    mixBlendMode: 'screen',
                  }}
                  className="max-w-full h-auto my-0"
                  aria-label={image.alt}
                />
              </div>
              <div className="whitespace-pre-line mt-4 md:mt-6 text-start text-base sm:text-lg md:text-xl text-neutral-200 max-w-full md:max-w-2xl ml-0 md:ml-auto">
                {section.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongTermSolutions;
