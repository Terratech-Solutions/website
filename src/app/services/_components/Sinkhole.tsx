'use client';

import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import { sinkhole } from '@/data/services/sinkholes.json';
import Image from 'next/image';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const Sinkhole = () => {
  const { section, stages } = sinkhole;
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <div className="px-4 md:px-13.5 pt-13 pb-13">
      <div className="max-w-[1440]  mx-auto bg-foreground max-sm:px-4 px-23.5 pt-7 pb-7">
        <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>

        <div className="flex flex-col pt-10">
          <div className="text-[60px]/[80px] max-md:text-[40px]/[55px]">
            <span className="text-lemon-green">{section.title.highlight}</span> <br />
            {section.title.rest}
          </div>

          <div className="flex justify-around items-center w-full pt-20 max-lg:flex-col max-lg:gap-8">
            {stages.map((stage, index) => (
              <div key={stage.label} className="flex flex-col items-center">
                <div
                  className={`flex relative overflow-hidden rounded-[32px] transition-transform duration-300 ease-in-out group
                    ${!isMobile ? 'hover:scale-105' : ''}
                    ${isMobile && activeIndex === index ? 'scale-105' : ''}
                  `}
                  onClick={() => handleClick(index)}
                  style={{ cursor: isMobile ? 'pointer' : 'default' }}
                >
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
                    <div
                      className={`absolute inset-0 transition-all duration-300 ease-in-out rounded-[32px]
                        ${
                          isMobile
                            ? activeIndex === index
                              ? 'bg-foreground/70'
                              : 'bg-foreground/0'
                            : 'bg-foreground/0 group-hover:bg-foreground/70'
                        }
                      `}
                    />
                    <div
                      className={`absolute inset-0 flex flex-col justify-center items-start p-8 transition-opacity duration-300 ease-in-out
                        ${
                          isMobile
                            ? activeIndex === index
                              ? 'opacity-100'
                              : 'opacity-0'
                            : 'opacity-0 group-hover:opacity-100'
                        }
                      `}
                    >
                      <h3 className="text-white text-2xl font-bold mb-4">{stage.title}</h3>
                      <p className="text-white text-base leading-relaxed">{stage.text}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-2">{stage.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sinkhole;
