'use client';

import DropdownItem from '@/app/services/_components/DropdownItem';
import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import { advanced } from '@/data/services/sinkholes.json';
import Image from 'next/image';

const Advanced = () => {
  const { section, points, image } = advanced;

  return (
    <div className="max-w-[1440] mx-auto px-10 md:px-23.5 pt-20 pb-20">
      <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>
      <div className="flex flex-col pt-10">
        <div className="text-[40px]/[60px] lg:text-[60px]/[80px] whitespace-pre-line">
          {section.title}
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
          <div className="flex relative mt-10 lg:mt-0">
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
  );
};

export default Advanced;
